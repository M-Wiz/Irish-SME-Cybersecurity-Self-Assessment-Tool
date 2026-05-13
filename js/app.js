(function () {
  'use strict';

  const state = {
    screen: 'opening',
    gate: { G1: '', G2: '', G3: '', G4: '', G5: '', G6: '' },
    answers: {},
    inDomainGates: {
      paymentDevice: '',
      visitorWiFi: ''
    },
    domainStep: 0
  };

  const root = document.getElementById('app');

  function applicableDomains() {
    return DOMAINS.filter(function (d) {
      return !d.suppressIf || !d.suppressIf(state);
    });
  }

  function applicableQuestions(domain) {
    return domain.questions.filter(function (q) {
      return !q.suppressIf || !q.suppressIf(state);
    });
  }

  function questionScore(ans) {
    if (ans === null || ans === undefined) return 0;
    return ans;
  }

  function domainMax(domain) {
    return applicableQuestions(domain).reduce(function (sum, q) {

      if (state.answers[q.id] === null) return sum;
      return sum + 2;
    }, 0);
  }
  function domainScore(domain) {
    return applicableQuestions(domain).reduce(function (sum, q) {
      return sum + questionScore(state.answers[q.id]);
    }, 0);
  }

  function domainPct(domain) {
    const max = domainMax(domain);
    if (max === 0) return 0;
    return (domainScore(domain) / max) * 100;
  }

  function domainRag(domain) {
    const pct = domainPct(domain);
    if (pct >= 87.5) return 'green';
    if (pct >= 50) return 'amber';
    return 'red';
  }

  function overall() {
    const doms = applicableDomains();
    let total = 0, max = 0;
    doms.forEach(function (d) {
      total += domainScore(d);
      max += domainMax(d);
    });
    const pct = max === 0 ? 0 : (total / max) * 100;
    let band;
    if (pct >= 75) band = 'green';
    else if (pct >= 40) band = 'amber';
    else band = 'red';
    return { pct: pct, band: band, total: total, max: max };
  }

  function bandLabel(b) {
    return b === 'green' ? 'Ready' : b === 'amber' ? 'Developing' : 'At Risk';
  }

  function bandIcon(b) {
    return b === 'green' ? '🟢' : b === 'amber' ? '🟡' : '🔴';
  }

  function nis2Status() {
    return isNIS2Amber(state) ? 'amber' : 'white';
  }

  function withAmber(obj, name) {
    if (obj && obj.amber && isNIS2Amber(state) && obj.amber[name] !== undefined) {
      return obj.amber[name];
    }
    return obj ? obj[name] : undefined;
  }

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        const v = attrs[k];
        if (v == null || v === false) return;
        if (k === 'class') node.className = v;
        else if (k === 'html') node.innerHTML = v;
        else if (k === 'text') node.textContent = v;
        else if (k.indexOf('on') === 0 && typeof v === 'function') {
          node.addEventListener(k.slice(2).toLowerCase(), v);
        } else if (k === 'data') {
          Object.keys(v).forEach(function (dk) { node.dataset[dk] = v[dk]; });
        } else if (typeof v === 'boolean') {
          if (v) node.setAttribute(k, '');
        } else {
          node.setAttribute(k, v);
        }
      });
    }
    (children || []).forEach(function (c) {
      if (c == null || c === false) return;
      if (typeof c === 'string') node.appendChild(document.createTextNode(c));
      else node.appendChild(c);
    });
    return node;
  }

  function clear() { while (root.firstChild) root.removeChild(root.firstChild); }

  function urlHref(u) {
    if (/^https?:\/\//i.test(u)) return u;
    return 'https://' + u;
  }

  function resourceLine(r) {
    return el('span', null, [
      r.label + ': ',
      el('a', { href: urlHref(r.url), target: '_blank', rel: 'noopener noreferrer' }, [r.url])
    ]);
  }

  function renderOpening() {
    clear();
    const card = el('div', { class: 'card opening' }, [
      el('h1', null, ['Irish SME Cybersecurity Self-Assessment Tool']),
      el('p', { class: 'subtitle' }, [
        'Understand your security position and your main legal obligations — in plain language, in under 20 minutes.'
      ]),
      el('div', { class: 'privacy' }, [
        el('strong', null, ['Privacy: ']),
        'Your answers are not stored, shared, or sent anywhere. Everything stays on your device.'
      ]),
      el('div', { class: 'disclaimer' }, [
        el('strong', null, ['Disclaimer: ']),
        'This tool gives you a starting point for understanding your cybersecurity position. It is not legal advice, not a substitute for a professional security assessment, and does not guarantee compliance with any regulation. Use the results to identify priorities and guide your next steps.'
      ]),
      el('p', { class: 'version' }, ['v1.0 | May 2026']),
      el('div', { class: 'btn-row' }, [
        el('button', {
          class: 'btn',
          type: 'button',
          onclick: function () { state.screen = 'gate'; render(); }
        }, ['Begin Assessment'])
      ])
    ]);
    root.appendChild(card);
  }

  function renderGate() {
    clear();
    const card = el('div', { class: 'card' }, [
      el('h1', null, ['About your business']),
      el('p', null, ['Six quick questions before we begin. They tailor the assessment to your business.'])
    ]);

    GATE_QUESTIONS.forEach(function (g) {
      const block = el('div', { class: 'gate-q', id: 'gate-' + g.id });
      block.appendChild(el('label', { class: 'q-label' }, [g.question]));

      if (g.type === 'dropdown') {
        const sel = el('select', {
          'aria-label': g.question,
          onchange: function (e) {
            state.gate[g.id] = e.target.value;
            const err = block.querySelector('.q-error');
            if (err) err.classList.remove('shown');
          }
        });
        sel.appendChild(el('option', { value: '' }, ['— Please select —']));
        g.options.forEach(function (opt) {
          const o = el('option', { value: opt }, [opt]);
          if (state.gate[g.id] === opt) o.selected = true;
          sel.appendChild(o);
        });
        block.appendChild(sel);
      } else if (g.type === 'yesno') {
        const row = el('div', { class: 'yesno' });
        ['Yes', 'No'].forEach(function (val) {
          const selected = state.gate[g.id] === val;
          const btn = el('button', {
            type: 'button',
            class: 'yesno-btn' + (selected ? ' selected' : ''),
            'aria-pressed': selected ? 'true' : 'false',
            onclick: function () {
              state.gate[g.id] = val;
              const err = block.querySelector('.q-error');
              if (err) err.classList.remove('shown');
              row.querySelectorAll('.yesno-btn').forEach(function (b) {
                b.classList.remove('selected');
                b.setAttribute('aria-pressed', 'false');
              });
              btn.classList.add('selected');
              btn.setAttribute('aria-pressed', 'true');
            }
          }, [val]);
          row.appendChild(btn);
        });
        block.appendChild(row);
      }

      block.appendChild(el('div', { class: 'q-error' }, [
        'Please answer this question before continuing.'
      ]));
      card.appendChild(block);
    });

    card.appendChild(el('div', { class: 'btn-row' }, [
      el('button', {
        class: 'btn',
        type: 'button',
        onclick: function () {
          let ok = true;
          GATE_QUESTIONS.forEach(function (g) {
            const v = state.gate[g.id];
            const block = card.querySelector('#gate-' + g.id);
            const err = block.querySelector('.q-error');
            if (!v) {
              err.classList.add('shown');
              ok = false;
            } else {
              err.classList.remove('shown');
            }
          });
          if (ok) { state.screen = 'nis2'; render(); }
        }
      }, ['Continue'])
    ]));

    root.appendChild(card);
  }

  function renderNis2() {
    clear();
    const status = nis2Status();
    const isAmber = status === 'amber';
    const icon = isAmber ? '🟡' : '⚪';
    const label = isAmber ? 'Check your size — NIS2 may apply' : 'Not directly in scope';
    const message = isAmber ? NIS2_AMBER_MESSAGE : NIS2_WHITE_MESSAGE;

    const panel = el('div', { class: 'card nis2 ' + (isAmber ? 'amber' : 'white') }, [
      el('div', { class: 'nis2-flag' }, [icon + '  ' + label]),
      el('h2', null, ['NIS2 status']),
      el('p', null, [message]),
      el('div', { class: 'btn-row' }, [
        el('button', {
          class: 'btn secondary',
          type: 'button',
          onclick: function () { state.screen = 'gate'; render(); }
        }, ['Back']),
        el('button', {
          class: 'btn',
          type: 'button',
          onclick: function () {
            state.screen = 'domain';
            state.domainStep = 0;
            render();
          }
        }, ['Continue to assessment'])
      ])
    ]);
    root.appendChild(panel);
  }

  function answerOptions(q) {
    const score2 = withAmber(q, 'score2Label') || 'Yes — and we have something written down';
    const score1 = withAmber(q, 'score1Label') || 'Yes, but this is informal — nothing is written down';
    const score0 = withAmber(q, 'score0Label') || 'No — this is not something we have done';
    const opts = [
      { value: 2, icon: '✅', label: score2 },
      { value: 1, icon: '⚠️', label: score1 },
      { value: 0, icon: '❌', label: score0 }
    ];

    if (q.hasNA) {
      opts.push({ value: null, icon: '⚪', label: q.naLabel });
    }
    return opts;
  }

  function renderQuestionBlock(q) {
    const block = el('div', { class: 'q-block', id: 'qblock-' + q.id });

    const text = withAmber(q, 'text');
    const tooltip = withAmber(q, 'tooltip');
    const legalNote = withAmber(q, 'legalNote');

    const header = el('div', { class: 'q-text' }, [
      el('span', { class: 'q-id' }, [q.id]),
      el('span', null, [text])
    ]);

    if (!legalNote && tooltip) {
      const tipId = 'tip-' + q.id;
      const tipBtn = el('button', {
        type: 'button',
        class: 'tooltip-btn',
        'aria-expanded': 'false',
        'aria-controls': tipId,
        'aria-label': 'Show explanation',
        title: 'Show explanation',
        onclick: function () {
          const tip = block.querySelector('.tooltip');
          const expanded = tip.classList.toggle('open');
          tipBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        }
      }, ['i']);
      header.appendChild(tipBtn);
    }

    block.appendChild(header);

    if (!legalNote && tooltip) {
      block.appendChild(el('div', {
        class: 'tooltip',
        id: 'tip-' + q.id,
        role: 'note'
      }, [tooltip]));
    }

    if (legalNote) {
      block.appendChild(el('div', { class: 'legal-line' }, [
        el('strong', null, ['Legal note: ']), legalNote
      ]));
    }

    const fws = (q.frameworks || []).slice();
    if (isNIS2Amber(state) && q.amber && q.amber.frameworksAppend) {
      Array.prototype.push.apply(fws, q.amber.frameworksAppend);
    }
    if (fws.length) {
      const details = el('details', { class: 'frameworks' });
      details.appendChild(el('summary', null, [
        'Frameworks (' + fws.length + ')'
      ]));
      const ul = el('ul');
      fws.forEach(function (citation) {
        ul.appendChild(el('li', null, [citation]));
      });
      details.appendChild(ul);
      block.appendChild(details);
    }

    const ansRow = el('div', { class: 'answers' });
    answerOptions(q).forEach(function (opt) {
      const selected = state.answers[q.id] === opt.value;
      const btn = el('button', {
        type: 'button',
        class: 'answer-btn' + (selected ? ' selected' : ''),
        'aria-pressed': selected ? 'true' : 'false',
        onclick: function () {
          state.answers[q.id] = opt.value;
          const err = block.querySelector('.q-error');
          if (err) err.classList.remove('shown');

          if (q.triggersRerender) {

            if (q.id === 'Q4.4' && opt.value === 0) {
              delete state.answers['Q4.5'];
            }
            renderDomain();
            return;
          }
          ansRow.querySelectorAll('.answer-btn').forEach(function (b) {
            b.classList.remove('selected');
            b.setAttribute('aria-pressed', 'false');
          });
          btn.classList.add('selected');
          btn.setAttribute('aria-pressed', 'true');
        }
      }, [
        el('span', { class: 'icon' }, [opt.icon]),
        el('span', null, [opt.label])
      ]);
      ansRow.appendChild(btn);
    });
    block.appendChild(ansRow);

    block.appendChild(el('div', { class: 'q-error' }, [
      'Please answer this question before continuing.'
    ]));

    return block;
  }

  function renderInDomainGate(gate) {
    const block = el('div', { class: 'q-block', id: 'idgate-' + gate.id });
    block.appendChild(el('div', { class: 'q-text' }, [
      el('span', null, [gate.question])
    ]));

    const row = el('div', { class: 'yesno' });
    ['Yes', 'No'].forEach(function (val) {
      const isSel = state.inDomainGates[gate.id] === val;
      const btn = el('button', {
        type: 'button',
        class: 'yesno-btn' + (isSel ? ' selected' : ''),
        'aria-pressed': isSel ? 'true' : 'false',
        onclick: function () {
          const prev = state.inDomainGates[gate.id];
          state.inDomainGates[gate.id] = val;

          if (val === 'No' && prev !== 'No') {

            delete state.answers[gate.beforeQuestion];
          }
          renderDomain();
        }
      }, [val]);
      row.appendChild(btn);
    });
    block.appendChild(row);

    block.appendChild(el('div', { class: 'q-error' }, [
      'Please answer this question before continuing.'
    ]));
    return block;
  }

  function renderDomain() {
    clear();
    const doms = applicableDomains();
    const domain = doms[state.domainStep];
    const idx = state.domainStep + 1;
    const total = doms.length;

    const card = el('div', { class: 'card' }, [
      el('div', { class: 'progress' }, ['Domain ' + idx + ' of ' + total]),
      el('h1', { class: 'domain-title' }, [domain.name])
    ]);

    const gates = domain.inDomainGates || [];
    const renderedGates = {};
    domain.questions.forEach(function (q) {
      gates.forEach(function (gate) {
        if (gate.beforeQuestion === q.id && !renderedGates[gate.id]) {
          card.appendChild(renderInDomainGate(gate));
          renderedGates[gate.id] = true;
        }
      });
      if (!q.suppressIf || !q.suppressIf(state)) {
        card.appendChild(renderQuestionBlock(q));
      }
    });

    gates.forEach(function (gate) {
      if (!renderedGates[gate.id]) {
        card.appendChild(renderInDomainGate(gate));
        renderedGates[gate.id] = true;
      }
    });

    const isLast = state.domainStep === doms.length - 1;
    const isFirst = state.domainStep === 0;

    card.appendChild(el('div', { class: 'btn-row' }, [
      el('button', {
        class: 'btn secondary',
        type: 'button',
        onclick: function () {
          if (isFirst) state.screen = 'nis2';
          else state.domainStep -= 1;
          render();
        }
      }, ['Back']),
      el('span', { class: 'spacer' }),
      el('button', {
        class: 'btn',
        type: 'button',
        onclick: function () {
          let ok = true;

          gates.forEach(function (gate) {
            const block = document.getElementById('idgate-' + gate.id);
            const err = block.querySelector('.q-error');
            if (!state.inDomainGates[gate.id]) {
              err.classList.add('shown');
              ok = false;
            } else {
              err.classList.remove('shown');
            }
          });

          applicableQuestions(domain).forEach(function (q) {
            const block = document.getElementById('qblock-' + q.id);
            const err = block.querySelector('.q-error');
            if (!(q.id in state.answers)) {
              err.classList.add('shown');
              ok = false;
            } else {
              err.classList.remove('shown');
            }
          });
          if (ok) {
            if (isLast) state.screen = 'results';
            else state.domainStep += 1;
            render();
            window.scrollTo(0, 0);
          }
        }
      }, [isLast ? 'See results' : 'Continue'])
    ]));

    root.appendChild(card);
  }

  function formatDate(d) {
    const months = ['January','February','March','April','May','June',
                    'July','August','September','October','November','December'];
    return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
  }

  function renderRagTable() {
    const doms = applicableDomains();
    const table = el('table', { class: 'rag' });
    const thead = el('thead');
    thead.appendChild(el('tr', null, [
      el('th', null, ['Domain']),
      el('th', null, ['Score']),
      el('th', null, ['Status'])
    ]));
    table.appendChild(thead);

    const tbody = el('tbody');
    doms.forEach(function (d) {
      const score = domainScore(d);
      const max = domainMax(d);
      const rag = domainRag(d);
      tbody.appendChild(el('tr', null, [
        el('td', null, ['D' + d.id + ' — ' + d.name]),
        el('td', null, [score + ' / ' + max]),
        el('td', { class: 'rag-cell ' + rag }, [
          bandIcon(rag) + ' ' + (rag === 'green' ? 'Green' : rag === 'amber' ? 'Amber' : 'Red')
        ])
      ]));
    });
    table.appendChild(tbody);
    return table;
  }

  function renderRemediationContent(qid, score) {
    const r = REMEDIATIONS[qid][score];
    const out = [];

    if (score === 0) {
      if (withAmber(r, 'legalAlert')) {
        out.push(el('div', { class: 'legal-alert' }, [
          el('span', { class: 'label' }, ['⚠️ LEGAL REQUIREMENT — ACT FIRST']),
          withAmber(r, 'legalAlert')
        ]));
      }

      const whatThisMeans = withAmber(r, 'whatThisMeans');
      const whyLegal = withAmber(r, 'whyLegal');
      if (whatThisMeans) {
        out.push(el('p', { class: 'opening-para' }, [whatThisMeans]));
      }
      if (whyLegal) {
        out.push(el('div', { class: 'field' }, [
          el('span', { class: 'field-label' }, ['Why it matters legally']),
          whyLegal
        ]));
      }
      const ol = el('ol', { class: 'steps' });

      const baseSteps = r.steps || [];
      const allSteps = (isNIS2Amber(state) && r.amber)
        ? (r.amber.prependSteps || []).concat(baseSteps, r.amber.appendSteps || [])
        : baseSteps;
      allSteps.forEach(function (s) { ol.appendChild(el('li', null, [s])); });
      out.push(ol);
      const resources = withAmber(r, 'resources') || [];
      const resWrap = el('div', { class: 'resources' }, [
        el('span', { class: 'field-label' }, ['Free resources'])
      ]);
      resources.forEach(function (res) {
        resWrap.appendChild(el('div', null, [resourceLine(res)]));
      });
      out.push(resWrap);
      out.push(el('div', { class: 'time' }, ['Time: ' + withAmber(r, 'time')]));
    } else if (score === 1) {

      const whyLabel = withAmber(r, 'whyDocumentLabel') || 'Why document';
      const recordLabel = withAmber(r, 'writtenRecordLabel') || 'Minimum written record';
      const isActionList = recordLabel === 'Action steps';
      const acknowledgement = withAmber(r, 'acknowledgement');
      const whyDocument = withAmber(r, 'whyDocument');
      if (acknowledgement) {
        out.push(el('p', { class: 'opening-para' }, [acknowledgement]));
      }
      if (whyDocument) {
        out.push(el('div', { class: 'field' }, [
          el('span', { class: 'field-label' }, [whyLabel]),
          whyDocument
        ]));
      }
      const lab = el('div', { class: 'field' }, [
        el('span', { class: 'field-label' }, [recordLabel])
      ]);
      const listEl = el(isActionList ? 'ol' : 'ul', {
        class: isActionList ? 'steps' : 'bullets'
      });
      const writtenRecord = withAmber(r, 'writtenRecord') || [];
      writtenRecord.forEach(function (w) { listEl.appendChild(el('li', null, [w])); });
      lab.appendChild(listEl);
      out.push(lab);

      const score1Resources = withAmber(r, 'resources');
      if (score1Resources && score1Resources.length) {
        const resWrap1 = el('div', { class: 'resources' }, [
          el('span', { class: 'field-label' }, ['Free resources'])
        ]);
        score1Resources.forEach(function (res) {
          resWrap1.appendChild(el('div', null, [resourceLine(res)]));
        });
        out.push(resWrap1);
      }
      out.push(el('div', { class: 'time' }, ['Time: ' + withAmber(r, 'time')]));
    } else {
      out.push(el('div', { class: 'field' }, [
        el('span', { class: 'field-label' }, ['Confirmation']),
        withAmber(r, 'confirmation')
      ]));
      out.push(el('div', { class: 'field' }, [
        el('span', { class: 'field-label' }, ['Next step']),
        withAmber(r, 'nextStep')
      ]));
    }
    return out;
  }

  function actionItem(q, score, opts) {
    opts = opts || {};
    const cls = ['action-item', 'score-' + score];
    if (opts.legal) cls.push('legal');

    const r = REMEDIATIONS[q.id][score];

    const time = score === 2 ? null : withAmber(r, 'time');

    const summaryChildren = [
      el('span', { class: 'qref' }, [q.id]),
      el('span', { class: 'item-title' }, [q.shortLabel])
    ];
    if (time) {

      const m = String(time).match(/(?:approximately\s+)?(\d+(?:\s*[-–]\s*\d+)?\s+(?:minutes?|hours?))/i);
      const display = m
        ? m[1]
        : String(time).replace(/^approximately\s+/i, '').replace(/\.$/, '');
      summaryChildren.push(el('span', { class: 'item-time' }, [display]));
    }

    const details = el('details', { class: cls.join(' ') });
    details.appendChild(el('summary', { class: 'action-summary' }, summaryChildren));
    renderRemediationContent(q.id, score).forEach(function (child) {
      details.appendChild(child);
    });
    return details;
  }

  function categorizeActionItems() {
    const buckets = { legal: [], high: [], medium: [], next: [] };
    applicableDomains().forEach(function (d) {
      const rag = domainRag(d);
      applicableQuestions(d).forEach(function (q) {
        const ans = state.answers[q.id];
        if (ans === null || ans === undefined) return;
        const entry = { d: d, q: q, score: ans };
        if (q.legalOverride && ans === 0) {

          if (q.id === 'Q8.2' && state.gate.G4 !== 'Yes') return;
          buckets.legal.push(entry);
        } else if (rag === 'red' && (ans === 0 || ans === 1)) {
          buckets.high.push(entry);
        } else if (rag === 'amber' && (ans === 0 || ans === 1)) {
          buckets.medium.push(entry);
        } else if (rag === 'green' && (ans === 1 || ans === 2)) {
          buckets.next.push(entry);
        }
      });
    });
    return buckets;
  }

  function renderTierGroups(items) {
    const byDomain = new Map();
    items.forEach(function (it) {
      if (!byDomain.has(it.d.id)) byDomain.set(it.d.id, { d: it.d, items: [] });
      byDomain.get(it.d.id).items.push(it);
    });
    const groups = [];
    byDomain.forEach(function (g) {
      g.items.sort(function (a, b) { return a.score - b.score; });
      const group = el('div', { class: 'domain-group' }, [
        el('h3', null, ['D' + g.d.id + ' — ' + g.d.name])
      ]);
      g.items.forEach(function (it) {
        group.appendChild(actionItem(it.q, it.score));
      });
      groups.push(group);
    });
    return groups;
  }

  function renderActionPlan() {
    const wrapper = el('div');
    const buckets = categorizeActionItems();

    const statRow = el('div', { class: 'stats-row' });
    [
      { key: 'legal',  singular: 'legal requirement',  plural: 'legal requirements',  icon: '⚠️' },
      { key: 'high',   singular: 'high-priority gap',  plural: 'high-priority gaps',  icon: '🔴' },
      { key: 'medium', singular: 'medium-priority gap', plural: 'medium-priority gaps', icon: '🟡' },
      { key: 'next',   singular: 'next step',          plural: 'next steps',          icon: '🟢' }
    ].forEach(function (s) {
      const count = buckets[s.key].length;
      const label = count === 1 ? s.singular : s.plural;
      statRow.appendChild(el('span', { class: 'stat' }, [
        el('span', { class: 'stat-icon' }, [s.icon]),
        el('strong', null, [String(count)]),
        ' ' + label
      ]));
    });
    wrapper.appendChild(statRow);

    if (buckets.legal.length) {
      const sec = el('div', { class: 'priority-section legal' }, [
        el('h2', { class: 'priority-header' }, ['⚠️  Legal Requirement']),
        el('p', { class: 'priority-sub' }, [
          'These items are legal obligations. Address them before anything else.'
        ])
      ]);
      buckets.legal.forEach(function (it) {
        sec.appendChild(actionItem(it.q, it.score, { legal: true }));
      });
      wrapper.appendChild(sec);
    }

    const tiers = [
      { key: 'high',   cls: 'high',   icon: '🔴', title: 'High Priority',   sub: 'This week' },
      { key: 'medium', cls: 'medium', icon: '🟡', title: 'Medium Priority', sub: 'This month' },
      { key: 'next',   cls: 'next',   icon: '🟢', title: 'Next Steps',      sub: 'When ready' }
    ];
    tiers.forEach(function (t) {
      const sec = el('div', { class: 'priority-section ' + t.cls }, [
        el('h2', { class: 'priority-header' }, [t.icon + '  ' + t.title]),
        el('p', { class: 'priority-sub' }, [t.sub])
      ]);
      const groups = renderTierGroups(buckets[t.key]);
      if (groups.length) {
        groups.forEach(function (g) { sec.appendChild(g); });
      } else {
        sec.appendChild(el('p', { class: 'empty-tier' }, ['No items in this priority.']));
      }
      wrapper.appendChild(sec);
    });

    return wrapper;
  }

  function renderResults() {
    clear();
    const o = overall();
    const status = nis2Status();

    const meta = el('dl', { class: 'meta' });
    [
      ['Sector', state.gate.G1],
      ['Business size', state.gate.G2],
      ['Date completed', formatDate(new Date())],
      ['NIS2 status', status === 'amber'
        ? '🟡  Check your size — NIS2 may apply'
        : '⚪  Not directly in scope']
    ].forEach(function (kv) {
      meta.appendChild(el('dt', null, [kv[0]]));
      meta.appendChild(el('dd', null, [kv[1]]));
    });

    const banner = el('div', { class: 'card banner' }, [
      el('h1', null, ['Your assessment results']),
      meta,
      el('div', { class: 'score-big' }, [
        el('span', { class: 'pct' }, [Math.round(o.pct) + '%']),
        el('span', { class: 'band ' + o.band }, [
          bandIcon(o.band) + ' ' + bandLabel(o.band)
        ])
      ]),
      el('h3', null, ['Domain breakdown']),
      renderRagTable()
    ]);
    root.appendChild(banner);

    const planCard = el('div', { class: 'card' }, [
      el('h2', null, ['Your action plan']),
      el('p', null, [
        'The items below are organised so you can work through them in order. ' +
        'Legal requirements come first, then high-priority gaps, then improvements.'
      ])
    ]);
    planCard.appendChild(renderActionPlan());
    root.appendChild(planCard);

    const info = el('div', { class: 'tool-info' }, [
      el('p', null, [
        el('strong', null, ['Irish SME Cybersecurity Self-Assessment Tool ']),
        '· v1.0 · May 2026'
      ]),
      el('p', null, [
        'This tool gives you a starting point for understanding your cybersecurity position. ' +
        'It is not legal advice and does not guarantee compliance with any regulation.'
      ])
    ]);
    root.appendChild(info);

    const restart = el('div', { class: 'btn-row no-print' }, [
      el('button', {
        class: 'btn',
        type: 'button',
        onclick: function () {

          const all = Array.from(document.querySelectorAll('details'));
          const prev = all.map(function (d) { return d.open; });
          all.forEach(function (d) { d.open = true; });
          window.print();
          setTimeout(function () {
            all.forEach(function (d, i) { d.open = prev[i]; });
          }, 1000);
        }
      }, ['Print action plan']),
      el('button', {
        class: 'btn secondary',
        type: 'button',
        onclick: function () {
          state.screen = 'opening';
          state.gate = { G1: '', G2: '', G3: '', G4: '', G5: '', G6: '' };
          state.answers = {};
          state.inDomainGates = { paymentDevice: '', visitorWiFi: '' };
          state.domainStep = 0;
          render();
        }
      }, ['Start over'])
    ]);
    root.appendChild(restart);
  }

  function render() {
    if (state.screen === 'opening') return renderOpening();
    if (state.screen === 'gate') return renderGate();
    if (state.screen === 'nis2') return renderNis2();
    if (state.screen === 'domain') return renderDomain();
    if (state.screen === 'results') return renderResults();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }

  window.__sme = { state: state };
})();
