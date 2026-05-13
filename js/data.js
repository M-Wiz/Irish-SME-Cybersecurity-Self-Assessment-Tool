const SECTORS = [
  'Construction and Trades',
  'Retail and Wholesale',
  'Accommodation and Food Services',
  'Professional Services (legal, accounting, HR, consultancy)',
  'Healthcare and Social Care',
  'IT and Managed Services',
  'Manufacturing and Food Production (industrial)',
  'Financial Services',
  'Transport and Logistics',
  'Energy and Utilities',
  'Education',
  'Other / General'
];

const SIZES = [
  'Just me',
  '2 to 9 people',
  '10 to 49 people',
  '50 to 249 people'
];

const GATE_QUESTIONS = [
  {
    id: 'G1',
    type: 'dropdown',
    question: 'What sector does your business operate in?',
    options: SECTORS
  },
  {
    id: 'G2',
    type: 'dropdown',
    question: 'How many people work in your business, including yourself?',
    options: SIZES
  },
  {
    id: 'G3',
    type: 'yesno',
    question: 'Does anyone in your business work remotely or use personal devices for work?'
  },
  {
    id: 'G4',
    type: 'yesno',
    question: 'Does your business collect, store or use personal information about customers, staff or anyone else?'
  },
  {
    id: 'G5',
    type: 'yesno',
    question: 'Does your business take card payments online or through your website?'
  },
  {
    id: 'G6',
    type: 'yesno',
    question: 'Does your business take card payments over the phone?'
  }
];

const NIS2_AT_RISK_SECTORS = [
  'Healthcare and Social Care',
  'IT and Managed Services',
  'Manufacturing and Food Production (industrial)',
  'Financial Services',
  'Transport and Logistics',
  'Energy and Utilities'
];

const NIS2_AMBER_MESSAGE =
  'Based on your sector and size, NIS2 cybersecurity obligations may apply ' +
  'to your business once the National Cyber Security Bill is enacted into ' +
  'Irish law. Ireland missed the October 2024 transposition deadline and ' +
  'the Bill is expected in 2026. You should monitor NCSC Ireland’s ' +
  'website for updates: www.ncsc.gov.ie/nis2';

const NIS2_WHITE_MESSAGE =
  'NIS2 is unlikely to apply directly to your business based on your ' +
  'sector and size. However, GDPR obligations apply to every business ' +
  'that handles personal information, regardless of size. The questions ' +
  'in this tool focus on the GDPR obligations most relevant to your ' +
  'business.';

function isNIS2Amber(state) {
  return state
      && state.gate
      && NIS2_AT_RISK_SECTORS.indexOf(state.gate.G1) !== -1
      && state.gate.G2 === '50 to 249 people';
}

const DOMAINS = [
  {
    id: 1,
    name: 'Accounts and Passwords',
    suppressIf: null,
    questions: [
      {
        id: 'Q1.1',
        text: 'Everyone has their own login. No one shares a username or password.',
        tooltip: 'Shared logins make it impossible to know who accessed what if something goes wrong.',
        legalNote: null,
        legalOverride: false,
        suppressIf: null,
        score2Label: 'Yes — everyone has their own separate login and we have a record of who has access to what',
        score0Label: 'No — logins are shared or individual accounts are not in place everywhere',
        frameworks: [
          'GDPR Art.32 (accountability, access audit trail)',
          'Cyber Essentials: User Access Control',
          'CIS Controls IG1: Control 5 (Account Management)',
          'ENISA SME Guide: access control',
          'CyFun® BASIC: access management',
          'NCSC Ireland SME guidance'
        ],
        shortLabel: 'Separate logins for everyone',
        amber: {
          frameworksAppend: [
            'NIS2 Art.21(2)(i): access control policies and asset management'
          ]
        }
      },
      {
        id: 'Q1.2',
        text: 'Your business email and any online accounts use a second step to log in, such as a code sent to your phone.',
        tooltip: null,
        legalNote: 'Using a second step to log in is listed as an appropriate technical measure under GDPR Article 32. The DPC expects it for any account holding personal data.',
        legalOverride: false,
        suppressIf: null,
        score1Label: 'Yes, on some accounts but not all',
        score2Label: 'Yes — two-step login is active on all our key business accounts',
        score0Label: 'No — we do not use a second step to log in on any accounts',
        frameworks: [
          'GDPR Art.32 (appropriate technical measure; DPC expectation)',
          'Cyber Essentials: User Access Control (v3.3 mandates MFA for cloud services)',
          'CIS Controls IG1: Control 6.3 (Require MFA for remote/admin access)',
          'ENISA SME Guide: access control',
          'CyFun® BASIC: access management'
        ],
        shortLabel: 'Two-step login on key accounts',
        amber: {
          frameworksAppend: [
            'NIS2 Art.21(2)(i): access control; Art.21(2)(j): multi-factor authentication specifically named'
          ]
        }
      },
      {
        id: 'Q1.3',
        text: 'All work accounts use strong passwords — at least 12 characters long — or a password manager is used.',
        tooltip: 'Short or reused passwords are one of the most common ways accounts are broken into.',
        legalNote: null,
        legalOverride: false,
        suppressIf: null,
        score1Label: 'We use strong passwords on most accounts but have no password manager or written rule',
        score2Label: 'Yes — all work accounts use strong unique passwords through a password manager',
        score0Label: 'No — we do not use a password manager and passwords may be weak or reused',
        frameworks: [
          'GDPR Art.32 (appropriate technical measure)',
          'Cyber Essentials: User Access Control',
          'CIS Controls IG1: Control 5.2 (Use Unique Passwords)',
          'ENISA SME Guide',
          'CyFun® BASIC',
          'NCSC Ireland SME guidance'
        ],
        shortLabel: 'Strong passwords or password manager'
      },
      {
        id: 'Q1.4',
        text: 'When someone leaves your business, their access to all work accounts and systems is removed straight away.',
        tooltip: 'Former staff or contractors who still have active logins are a risk even if they would never misuse them — accounts can be compromised without their knowledge.',
        legalNote: null,
        legalOverride: false,
        suppressIf: null,
        score1Label: 'We do this but rely on remembering — there is no checklist or formal process',
        score2Label: 'Yes — access is always removed on the last day and we have a written leaver process',
        score0Label: 'No — we do not have a process for removing access when people leave',
        frameworks: [
          'GDPR Art.32 (access no longer required must be removed)',
          'Cyber Essentials: User Access Control',
          'CIS Controls IG1: Control 5.3 (Disable Dormant Accounts)',
          'ENISA SME Guide',
          'CyFun® BASIC'
        ],
        shortLabel: 'Remove access when staff leave',
        amber: {
          frameworksAppend: [
            'NIS2 Art.21(2)(i): human resources security'
          ]
        }
      },
      {
        id: 'Q1.5',
        text: 'Admin accounts with full control are only used for admin tasks. They are not used for everyday work like email or browsing.',
        tooltip: 'Accounts with full control cause far more damage if compromised. Keeping them separate from day-to-day use limits what an attacker can do.',
        legalNote: null,
        legalOverride: false,
        suppressIf: null,
        score2Label: 'Yes — admin accounts are only ever used for admin tasks and are separate from everyday accounts',
        score0Label: 'No — admin accounts are also used for email or everyday browsing',
        frameworks: [
          'GDPR Art.32 (principle of least privilege)',
          'Cyber Essentials: User Access Control (least privilege requirement)',
          'CIS Controls IG1: Control 5.4 (Restrict Administrator Privileges to Dedicated Admin Accounts)',
          'ENISA SME Guide',
          'CyFun® BASIC'
        ],
        shortLabel: 'Separate admin accounts',
        amber: {
          frameworksAppend: [
            'NIS2 Art.21(2)(i): access control'
          ]
        }
      }
    ]
  },

  {
    id: 2,
    name: 'Devices and Software',
    suppressIf: null,
    inDomainGates: [
      {
        id: 'paymentDevice',
        question: 'Does your business use a dedicated device or terminal for taking card payments?',
        beforeQuestion: 'Q2.5'
      }
    ],
    questions: [
      {
        id: 'Q2.1',
        text: 'All work devices have the latest security updates installed.',
        tooltip: 'Security updates fix known weaknesses in software. Devices that are not up to date are significantly easier to break into.',
        legalNote: null, legalOverride: false, suppressIf: null,
        score1Label: 'Updates are installed on most devices but we have not checked all of them',
        score2Label: 'Yes — all work devices have automatic updates turned on and are checked regularly',
        score0Label: 'No — we do not regularly check or install security updates on all work devices',
        frameworks: [
          'GDPR Art.32 (appropriate technical measure)',
          'Cyber Essentials: Patch Management (one of five core technical controls)',
          'CIS Controls IG1: Control 7 (Continuous Vulnerability Management)',
          'ENISA SME Guide: Step 1',
          'CyFun® BASIC',
          'NCSC Ireland SME guidance'
        ],
        shortLabel: 'Security updates installed',
        amber: {
          frameworksAppend: [
            'NIS2 Art.21(2)(e): vulnerability handling and patching'
          ],
          text: 'All work devices have the latest security updates installed. Your business also has a process for spotting and fixing new vulnerabilities in the software you use.',
          legalNote: 'NIS2 Article 21(2)(e) extends the basic patching requirement to include vulnerability handling. In-scope businesses must have a documented process for finding, assessing, and fixing vulnerabilities. This goes beyond automatic updates. It includes actively monitoring for new issues in the software your business depends on.',
          score2Label: 'Yes — all devices have automatic updates enabled, we monitor for vulnerabilities in key software, and we have a documented patching process',
          score1Label: 'Updates are installed on most devices but we have no formal vulnerability monitoring or documented patching process'
        }
      },
      {
        id: 'Q2.2',
        text: 'All work devices have protection against harmful software installed, such as antivirus.',
        tooltip: 'Harmful software can lock your files, steal passwords, or give attackers access to your systems without you knowing.',
        legalNote: null, legalOverride: false, suppressIf: null,
        score1Label: 'Some devices have protection installed but we have not confirmed this for all of them',
        score2Label: 'Yes — all work devices have protection against harmful software installed and up to date',
        score0Label: 'No — not all work devices have protection against harmful software installed',
        frameworks: [
          'GDPR Art.32',
          'Cyber Essentials: Malware Protection (one of five core technical controls)',
          'CIS Controls IG1: Control 10 (Malware Defenses)',
          'ENISA SME Guide',
          'CyFun® BASIC',
          'NCSC Ireland SME guidance'
        ],
        shortLabel: 'Anti-malware protection'
      },
      {
        id: 'Q2.3',
        text: 'All work devices are set up securely. Default passwords are changed, unused features are turned off, and screen locks are enabled.',
        tooltip: 'Devices often come with weak default settings that attackers know about and can exploit straight away. A laptop or phone with no screen lock is a personal data breach the moment it is left on a train.',
        legalNote: null, legalOverride: false, suppressIf: null,
        score1Label: 'Some devices have been set up this way but we have not done this for all of them',
        score2Label: 'Yes — all devices have been set up securely and we have a checklist for when new devices are added',
        score0Label: 'No — we have not changed default settings or reviewed the security setup on our devices',
        frameworks: [
          'GDPR Art.32',
          'Cyber Essentials: Secure Configuration (one of five core technical controls)',
          'CIS Controls IG1: Control 4 (Secure Configuration of Enterprise Assets and Software)',
          'ENISA SME Guide',
          'CyFun® BASIC',
          'NCSC Ireland SME guidance'
        ],
        shortLabel: 'Secure device setup'
      },
      {
        id: 'Q2.4',
        text: 'You know what devices are used for work in your business and who is responsible for each one.',
        tooltip: 'If you do not know what devices your business uses, you cannot make sure they are all secure and up to date.',
        legalNote: null, legalOverride: false, suppressIf: null,
        score1Label: 'We have a rough idea of what devices we use but nothing is written down or kept up to date',
        score2Label: 'Yes — we have an up-to-date written list of all work devices and who is responsible for each',
        score0Label: 'No — we do not have a list of what devices are used for work in our business',
        frameworks: [
          'CIS Controls IG1: Control 1 (Inventory and Control of Enterprise Assets) — primary citation',
          'ENISA SME Guide',
          'CyFun® BASIC: asset management',
          'GDPR Art.32 (you cannot secure what you cannot see)'
        ],
        shortLabel: 'Device inventory',
        amber: {
          frameworksAppend: [
            'NIS2 Art.21(2)(i): asset management'
          ]
        }
      },
      {
        id: 'Q2.5',
        text: 'The device used for card payments is not used for everyday tasks like email or browsing.',
        tooltip: 'Mixing payment devices with everyday tasks increases the risk of harmful software reaching systems that handle card data.',
        legalNote: null, legalOverride: false,
        suppressIf: function (s) { return s.inDomainGates.paymentDevice !== 'Yes'; },
        score2Label: 'Yes — the payment device is kept for payments only and there is a written rule in place',
        score0Label: 'No — the payment device is also used for everyday tasks like email or browsing',
        frameworks: [
          'GDPR Art.32 (appropriate technical measure)',
          'Cyber Essentials: Secure Configuration / network separation',
          'CIS Controls IG1: Control 4 (Secure Configuration), Control 12 (Network Infrastructure Management)',
          'ENISA SME Guide'
        ],
        shortLabel: 'Payment device kept separate'
      },
      {
        id: 'Q2.6',
        text: 'Work laptops and portable devices have full-disk encryption turned on. If a device is lost or stolen, the data on it cannot be read.',
        tooltip: null,
        legalNote: 'Encrypting devices is listed as an appropriate technical security measure under GDPR Article 32. The DPC expects businesses handling personal data on portable devices to protect it against loss or theft. Without encryption, a lost laptop is a probable personal data breach.',
        legalOverride: false, suppressIf: null,

        hasNA: true,
        naLabel: 'Not applicable — we don’t use laptops or portable devices',
        score2Label: 'Yes — all laptops and portable work devices have full-disk encryption enabled',
        score1Label: 'Encryption is turned on some devices but not consistently across all laptops and portable work devices',
        score0Label: 'No — laptops and portable devices used for work are not encrypted',
        frameworks: [
          'GDPR Art.32 (encryption explicitly named as appropriate technical measure)',
          'CIS Controls IG1: Control 3.6 (Encrypt Data on End-User Devices)',
          'ENISA SME Guide',
          'CyFun® BASIC'
        ],
        shortLabel: 'Device encryption',

        amber: {
          frameworksAppend: [
            'NIS2 Art.21(2)(h): policies and procedures on the use of cryptography'
          ],
          legalNote: 'Encrypting devices is listed as an appropriate technical security measure under GDPR Article 32. NIS2 Article 21(2)(h) goes further — it specifically requires your business to have a written policy on the use of cryptography, not just having encryption enabled.',
          score2Label: 'Yes — all laptops and portable devices are encrypted and we have a written encryption policy'
        }
      }
    ]
  },

  {
    id: 3,
    name: 'Personal Data Handling',
    suppressIf: function (s) { return s.gate.G4 === 'No'; },
    questions: [
      {
        id: 'Q3.1',
        text: 'You know what personal information your business holds, where it is stored, and why you have it.',
        tooltip: 'Personal information includes names, addresses, emails, health details, and financial information. It applies to customers, staff, or anyone else.',
        legalNote: null, legalOverride: false, suppressIf: null,
        score1Label: 'We have a general awareness of this but have not mapped it formally',
        score2Label: 'Yes — we have a written record of all personal data we hold, why we hold it, and where it is stored',
        score0Label: 'No — we have not mapped what personal information our business collects or holds',
        frameworks: [
          'GDPR Art.5 (purpose limitation, data minimisation), Art.30 (prerequisite to RoPA)',
          'CIS Controls IG1: Control 3 (Data Protection — data inventory)',
          'ENISA SME Guide: data protection section',
          'CyFun® BASIC: data management'
        ],
        shortLabel: 'Know what personal data you hold',
        amber: {
          frameworksAppend: [
            'NIS2 Art.21(2)(i): asset management includes data assets'
          ]
        }
      },
      {
        id: 'Q3.2',
        text: 'Only the people who need to see personal data can access it.',
        tooltip: 'Limiting who can access personal data is one of the key technical measures required by GDPR — not everyone in a business needs access to everything.',
        legalNote: null, legalOverride: false, suppressIf: null,
        score1Label: 'We try to limit access but this has not been formally reviewed or written down',
        score2Label: 'Yes — access to personal data has been formally reviewed and only those who need it can see it',
        score0Label: 'No — we have not reviewed or restricted who can access personal data in our business',
        frameworks: [
          'GDPR Art.5(1)(f): integrity and confidentiality; Art.32: appropriate technical measures',
          'CIS Controls IG1: Control 3 (Data Protection), Control 6 (Access Control Management)',
          'ENISA SME Guide',
          'CyFun® BASIC'
        ],
        shortLabel: 'Limit access to personal data'
      },
      {
        id: 'Q3.3',
        text: 'Your business has a written record of what personal information it holds and what it is used for.',
        tooltip: null,
        legalNote: 'GDPR Article 30 requires most businesses that handle personal data to keep a written record of their processing activities. The Data Protection Commission can ask to see this at any time.',
        legalOverride: false, suppressIf: null,
        score1Label: 'We have some notes but nothing formal or complete',
        score2Label: 'Yes — we have a complete and up-to-date Record of Processing Activities',
        score0Label: 'No — we have no written record of what personal data our business holds or processes',
        frameworks: [
          'GDPR Art.30: explicit legal requirement to maintain a Record of Processing Activities',
          'ENISA SME Guide (references RoPA directly)',
          'ENISA Guidelines for SMEs on the Security of Personal Data Processing (2016)'
        ],
        shortLabel: 'Written record of processing'
      },
      {
        id: 'Q3.4',
        text: 'Personal data that is no longer needed is deleted or destroyed in a secure way.',
        tooltip: 'Keeping data longer than needed increases your risk — data you no longer hold cannot be stolen or leaked.',
        legalNote: null, legalOverride: false, suppressIf: null,
        score1Label: 'We do this sometimes but have no consistent rule or written process',
        score2Label: 'Yes — we have written retention rules and carry out regular secure clear-outs',
        score0Label: 'No — we do not have a process for deleting personal data we no longer need',
        frameworks: [
          'GDPR Art.5(1)(e): storage limitation principle — data must not be kept longer than necessary',
          'CIS Controls IG1: Control 3.2 (Establish and Maintain a Data Inventory)',
          'ENISA SME Guide'
        ],
        shortLabel: 'Secure deletion when no longer needed'
      },
      {
        id: 'Q3.5',
        text: 'Online card payments go through a recognised payment provider. Your business does not store customers’ card details itself.',
        tooltip: 'Payment providers such as Stripe, PayPal, and Square handle card security on your behalf. Using one means your business does not hold sensitive card data.',
        legalNote: null, legalOverride: false,
        suppressIf: function (s) { return s.gate.G5 === 'No'; },
        score1Label: 'Payments go through a provider but we are not certain about card storage',
        score2Label: 'Yes — payments go through a recognised provider and we do not store card details',
        score0Label: 'No — we do not use a recognised payment provider or we may be storing card details ourselves',
        frameworks: [
          'GDPR Art.5(1)(c): data minimisation; Art.32: security of processing',
          'ENISA SME Guide'
        ],
        shortLabel: 'Card payments via recognised provider'
      },
      {
        id: 'Q3.6',
        text: 'Your business has a written privacy notice. It tells customers and staff what data you collect, why, and what their rights are. The notice is visible when their data is collected.',
        tooltip: null,
        legalNote: 'GDPR Articles 13 and 14 require businesses to inform individuals at the point their data is collected — what data, why, who it is shared with, how long it is kept, and how to exercise their rights. The DPC consistently lists privacy notice failures as one of the most-cited areas in its complaint statistics, including against small businesses.',
        legalOverride: false, suppressIf: null,
        score1Label: 'A privacy notice exists but it is incomplete, out of date, or not visible at the point of collection',
        score2Label: 'Yes — we have a complete written privacy notice and it is visible to people at the point their data is collected',
        score0Label: 'No — our business does not have a written privacy notice',
        frameworks: [
          'GDPR Article 13 (information at point of collection from the data subject), Article 14 (when data is obtained from a third party)',
          'Data Protection Commission — right to be informed guidance',
          'ENISA SME Guide: data protection section',
          'CyFun® BASIC: data management'
        ],
        shortLabel: 'Privacy notice'
      },
      {
        id: 'Q3.7',
        text: 'If a customer or staff member asks to see or delete what you hold about them, you know what to do and who handles it.',
        tooltip: null,
        legalNote: 'GDPR Article 15 gives individuals the right to a copy of their personal data within one month of request, and Article 17 gives them the right to erasure in certain circumstances. The DPC regularly fields complaints about businesses that ignored or fumbled these requests.',
        legalOverride: false, suppressIf: null,
        score1Label: 'We are aware these requests can come in but have not written down a process for handling them',
        score2Label: 'Yes — we have a written process for handling subject access and erasure requests, with a named person responsible',
        score0Label: 'No — we would not know what to do if someone asked to see or delete their data',
        frameworks: [
          'GDPR Article 15 (right of access), Article 17 (right to erasure)',
          'Data Protection Commission — guidance on data subject rights',
          'ENISA SME Guide: data protection section'
        ],
        shortLabel: 'Subject access requests'
      }
    ]
  },

  {
    id: 4,
    name: 'Breach and Incident Response',
    suppressIf: null,
    questions: [
      {
        id: 'Q4.1',
        text: 'You know what counts as a data breach — for example, sending a customer’s details to the wrong person.',
        tooltip: 'A data breach does not have to involve hackers. Sending an email to the wrong address or losing a USB drive with customer details both count.',
        legalNote: null, legalOverride: false, suppressIf: null,
        score1Label: 'We have a general awareness of this but have not thought through what it means for our business specifically',
        score2Label: 'Yes — we know what counts as a breach and have a written list of the scenarios most relevant to our business',
        score0Label: 'No — we are not clear on what would count as a data breach in our business',
        frameworks: [
          'GDPR Art.33 (you must notify only if you recognise an incident as a breach — awareness is the prerequisite)',
          'CIS Controls IG1: Control 17 (Incident Response Management)',
          'ENISA SME Guide: incident management',
          'CyFun® BASIC: Respond function (NIST CSF 2.0 alignment)'
        ],
        shortLabel: 'Recognise what counts as a breach'
      },
      {
        id: 'Q4.2',
        text: 'Your business has a process for reporting a data breach to the Data Protection Commission. Where serious, the people affected are told too.',
        tooltip: null,
        legalNote: 'GDPR Article 33 requires reporting certain breaches to the DPC within 72 hours. Article 34 requires notifying affected individuals directly when a breach poses a high risk to them. Both obligations apply regardless of business size.',
        legalOverride: true, suppressIf: null,
        score1Label: 'We are aware of this obligation but have no defined process',
        score2Label: 'Yes — we have a written process for notifying the DPC and affected individuals when required',
        score0Label: 'No — we have no process for reporting a data breach to the Data Protection Commission',
        frameworks: [
          'GDPR Art.33 (72-hour DPC notification), Art.34 (individual notification) — direct legal requirement',
          'CIS Controls IG1: Control 17 (Incident Response Management)',
          'ENISA SME Guide',
          'CyFun® BASIC: Respond function'
        ],
        shortLabel: 'Breach reporting process',
        amber: {
          frameworksAppend: [
            'NIS2 Art.23: early warning (24h) and notification (72h) to NCSC Ireland'
          ],
          text: 'Your business knows how to report a personal data breach to the DPC and a significant cybersecurity incident to NCSC Ireland. Where the breach is serious, the people affected are told too.',
          legalNote: 'GDPR Article 33 requires reporting personal data breaches to the DPC within 72 hours. NIS2 Article 23 is a separate and parallel obligation — significant cybersecurity incidents must be reported to NCSC Ireland with an early warning within 24 hours, a full notification within 72 hours, and a final report within one month. These are two different authorities covering different incident types. An incident can trigger both obligations, one, or neither.',
          score1Label: 'We have a DPC notification process in place but have not addressed the NCSC Ireland reporting obligation under NIS2',
          score0Label: 'No — we have no process for reporting to either the DPC or NCSC Ireland'
        }
      },
      {
        id: 'Q4.8',
        text: 'Your business keeps a written log of any personal data incidents, including minor ones. The log notes what happened, what data was involved, and what was done.',
        tooltip: null,
        legalNote: 'GDPR Article 33(5) requires businesses to maintain an internal record of all personal data breaches — including those that did not meet the threshold for reporting to the DPC — covering the facts, effects, and remedial action taken. The DPC can ask to see this register at any time.',
        legalOverride: false, suppressIf: null,
        score1Label: 'We have notes on past incidents but not as a structured register, or we only log incidents that were reported',
        score2Label: 'Yes — we keep a written breach register covering all incidents, including those below the reporting threshold',
        score0Label: 'No — we do not keep a written log of personal data incidents',
        frameworks: [
          'GDPR Article 33(5): internal record of all personal data breaches',
          'Data Protection Commission — breach notification guidance (covers internal recording)',
          'ENISA SME Guide: incident management',
          'CyFun® BASIC: Respond function'
        ],
        shortLabel: 'Breach register'
      },
      {
        id: 'Q4.3',
        text: 'Your business has a named person responsible for handling a security incident.',
        tooltip: 'When something goes wrong is the worst time to work out who is in charge. Deciding this in advance saves critical time.',
        legalNote: null, legalOverride: false, suppressIf: null,
        score1Label: 'There is an obvious person in mind but this has never been formally agreed or written down',
        score2Label: 'Yes — there is a formally designated person and their contact details are accessible to all staff',
        score0Label: 'No — there is no named person responsible for handling a security incident',
        frameworks: [
          'GDPR Art.32 (organisational measures)',
          'CIS Controls IG1: Control 17.1 (Designate Personnel to Manage Incident Handling)',
          'ENISA SME Guide',
          'CyFun® BASIC',
          'NIST CSF 2.0: RS.MA (Respond — Incident Management)'
        ],
        shortLabel: 'Named incident lead'
      },
      {
        id: 'Q4.4',
        text: 'Your business has a basic written plan for handling an incident that affects your systems or data.',
        tooltip: 'A plan does not need to be complex. Even a one-page list of steps and contacts means you are not starting from scratch in a crisis.',
        legalNote: null, legalOverride: false, suppressIf: null,
        score1Label: 'We have a rough idea of what we would do but nothing is written down',
        score2Label: 'Yes — we have a written incident plan stored somewhere accessible without the affected device',
        score0Label: 'No — we have no plan for what to do if our systems or data are affected by an incident',
        frameworks: [
          'GDPR Art.32 (organisational measures)',
          'CIS Controls IG1: Control 17 (Incident Response Management)',
          'ENISA SME Guide',
          'CyFun® BASIC: Respond function'
        ],
        shortLabel: 'Written incident response plan',
        triggersRerender: true,
        amber: {
          frameworksAppend: [
            'NIS2 Art.21(2)(b): incident handling procedures covering full lifecycle'
          ],
          text: 'Your business has a written incident plan. It covers how to detect an incident, contain it, recover, and notify the right people — including the DPC and NCSC Ireland where required.',
          legalNote: 'NIS2 Article 21(2)(b) requires documented incident handling procedures covering the full incident lifecycle. The plan must distinguish between three categories of incident. Those that trigger GDPR DPC notification. Those that trigger NIS2 NCSC Ireland notification. Those requiring both. These categories overlap but are not identical.',
          score2Label: 'Yes — we have a written plan covering detection, containment, recovery, and both DPC and NCSC Ireland reporting where required, stored somewhere accessible',
          score0Label: 'No — we have no incident plan and no established reporting procedures for DPC or NCSC Ireland'
        }
      },
      {
        id: 'Q4.5',
        text: 'Your incident response plan has been walked through or tested at least once with the people responsible for carrying it out.',
        tooltip: 'A plan that has never been tested may not work under pressure. Even a 30-minute walkthrough reveals gaps that are straightforward to fix in advance.',
        legalNote: null, legalOverride: false,

        suppressIf: function (s) {
          return s.answers['Q4.4'] !== 1 && s.answers['Q4.4'] !== 2;
        },
        score2Label: 'Yes — the plan has been tested and we have a written record of when and what we found',
        score0Label: 'No — the plan has never been walked through or tested with the people responsible',
        frameworks: [
          'GDPR Art.32',
          'CIS Controls IG1: Control 17.7 (Conduct Routine Incident Response Exercises)',
          'ENISA SME Guide',
          'CyFun® BASIC'
        ],
        shortLabel: 'Tested incident response plan',
        amber: {
          frameworksAppend: [
            'NIS2 Art.21(2)(b) — tested plan is the NIS2 expectation'
          ]
        }
      },
      {
        id: 'Q4.6',
        text: 'Your business has a written cybersecurity risk assessment. It lists what could go wrong, the impact, and what you have in place to address it.',
        tooltip: null,
        legalNote: 'NIS2 Article 21(2)(a) requires in-scope businesses to have documented policies on cybersecurity risk analysis. A risk assessment is the foundation for every other Article 21 duty. Without one, you cannot show that your security measures are proportionate to your actual exposure.',
        legalOverride: false,
        suppressIf: function (s) { return !isNIS2Amber(s); },
        score2Label: 'Yes — we have a written risk assessment covering our key assets, the main threats, and our current mitigations',
        score1Label: 'We have thought about our risks informally but have not documented this as a written assessment',
        score0Label: 'No — we have not assessed or documented the cybersecurity risks our business faces',
        frameworks: [
          'NIS2 Art.21(2)(a): documented policies on risk analysis — primary legal basis for this question',
          'ISO/IEC 27001:2022: risk assessment is the foundation of the entire ISMS framework',
          'CyFun® BASIC: Govern function',
          'NIST CSF 2.0: ID.RA (Identify — Risk Assessment)',
          'ENISA SME Guide'
        ],
        shortLabel: 'Documented security risk assessment'
      },
      {
        id: 'Q4.7',
        text: 'The most senior person in your business has reviewed your security measures. They understand the main risks and have approved the steps being taken.',
        tooltip: null,
        legalNote: 'NIS2 Article 20 places direct responsibility on management bodies for cybersecurity risk management. For most small businesses, this means the owner or most senior decision-maker — not a technical person, but the person ultimately responsible for how the business operates. The obligation is not to be a technical expert, but to be informed and accountable.',
        legalOverride: false,
        suppressIf: function (s) { return !isNIS2Amber(s); },
        score2Label: 'Yes — the most senior person has formally reviewed our security measures and this is documented',
        score1Label: 'The most senior person is generally aware of our security situation but has not formally reviewed or approved it',
        score0Label: 'No — security is handled without the formal involvement or awareness of the most senior person',
        frameworks: [
          'NIS2 Art.20: management bodies responsible for cybersecurity risk-management measures — direct legal basis',
          'ISO/IEC 27001:2022: Section 5 (Leadership and Commitment)',
          'CyFun® BASIC: Govern function',
          'NIST CSF 2.0: GV.RR (Govern — Roles, Responsibilities and Authorities)'
        ],
        shortLabel: 'Management oversight of security'
      }
    ]
  },

  {
    id: 5,
    name: 'Backups and Recovery',
    suppressIf: null,
    questions: [
      {
        id: 'Q5.1',
        text: 'Important files and data are backed up at least once a week.',
        tooltip: 'Without backups, a ransomware attack or accidental deletion could destroy files your business depends on.',
        legalNote: null, legalOverride: false, suppressIf: null,
        score1Label: 'We back up occasionally but not regularly or reliably',
        score2Label: 'Yes — important business files are backed up automatically at least once a week',
        score0Label: 'No — we do not back up our important business files',
        frameworks: [
          'GDPR Art.32(1)(c): ability to restore the availability and access to personal data',
          'Cyber Essentials: covered in CE guidance (not one of the five core controls but included in scheme)',
          'CIS Controls IG1: Control 11.1 (Establish and Maintain a Data Recovery Process)',
          'ENISA SME Guide',
          'CyFun® BASIC: Recover function',
          'NCSC Ireland SME guidance'
        ],
        shortLabel: 'Regular backups',
        amber: {
          frameworksAppend: [
            'NIS2 Art.21(2)(c): backup management and recovery'
          ]
        }
      },
      {
        id: 'Q5.2',
        text: 'Backups are stored somewhere separate from your main devices — such as in the cloud or on a drive kept offsite.',
        tooltip: 'A backup stored on the same device it came from offers no protection if that device is stolen, damaged or encrypted by an attacker.',
        legalNote: null, legalOverride: false, suppressIf: null,
        score1Label: 'Backups are partially separated but not consistently',
        score2Label: 'Yes — all backups are consistently stored separately from our main devices and network',
        score0Label: 'No — backups are on the same device or network as the files they are meant to protect',
        frameworks: [
          'GDPR Art.32(1)(c)',
          'CIS Controls IG1: Control 11.3 (Protect Recovery Data)',
          'ENISA SME Guide',
          'CyFun® BASIC'
        ],
        shortLabel: 'Backups stored separately',
        amber: {
          frameworksAppend: [
            'NIS2 Art.21(2)(c)'
          ]
        }
      },
      {
        id: 'Q5.3',
        text: 'You have checked that your backups work by successfully restoring at least one file from them.',
        tooltip: 'A backup that has never been tested may not work when you need it. Restoring a single file takes a few minutes and confirms everything is in order.',
        legalNote: null, legalOverride: false, suppressIf: null,
        score1Label: 'We have not tested restoring but believe it would work',
        score2Label: 'Yes — we have successfully restored a file from backup and have a record of the date and result',
        score0Label: 'No — we have never tested whether our backups can actually be restored',
        frameworks: [
          'GDPR Art.32(1)(c) (ability to restore — implies testing)',
          'CIS Controls IG1: Control 11.5 (Test Data Recovery)',
          'ENISA SME Guide (cited as a commonly skipped but critical step)',
          'CyFun® BASIC'
        ],
        shortLabel: 'Tested backup restore',
        amber: {
          frameworksAppend: [
            'NIS2 Art.21(2)(c)'
          ]
        }
      },
      {
        id: 'Q5.4',
        text: 'You know how long it would take to restore your business files if they were lost or deleted.',
        tooltip: 'Knowing your recovery time helps you make better decisions about how often to back up and how to protect what matters most.',
        legalNote: null, legalOverride: false, suppressIf: null,
        score1Label: 'We have a rough idea but have never properly worked this through or written it down',
        score2Label: 'Yes — we have worked through this properly and have a written estimate and identified any gaps',
        score0Label: 'No — we have never worked out how long it would take to recover our business files',
        frameworks: [
          'GDPR Art.32(1)(c)',
          'CIS Controls IG1: Control 11 (Data Recovery)',
          'ENISA SME Guide',
          'CyFun® BASIC'
        ],
        shortLabel: 'Recovery time understood',
        amber: {
          frameworksAppend: [
            'NIS2 Art.21(2)(c): formal RTO and RPO expected for in-scope entities'
          ],
          text: 'Your business has written down how long it would take to restore each critical system. You also know the maximum amount of data you could lose.',
          legalNote: 'NIS2 Article 21(2)(c) requires documented business continuity measures, including recovery capabilities. For NIS2 entities, you need a formal, tested Recovery Time Objective and Recovery Point Objective for each critical system. The Recovery Time Objective is the maximum time to restore operations. The Recovery Point Objective is the maximum data loss that is acceptable. A rough estimate is not enough.',
          score2Label: 'Yes — we have documented RTOs and RPOs for our critical systems and these have been tested',
          score1Label: 'We have a rough idea of recovery times but have not formally documented or tested RTO and RPO'
        }
      },
      {
        id: 'Q5.5',
        text: 'At least one copy of your backups is stored offline — somewhere it cannot be accessed or changed remotely.',
        tooltip: 'Harmful software can encrypt backups that are connected to the same network as your main devices. A copy kept completely separate cannot be reached this way.',
        legalNote: null, legalOverride: false, suppressIf: null,
        score1Label: 'We have done this but do not maintain it consistently or on a regular schedule',
        score2Label: 'Yes — we have an offline backup copy that is updated on a regular schedule',
        score0Label: 'No — all our backups are permanently connected to our network or devices',
        frameworks: [
          'GDPR Art.32(1)(c)',
          'CIS Controls IG1: Control 11.3 (Protect Recovery Data)',
          'ENISA SME Guide',
          'CyFun® BASIC'
        ],
        shortLabel: 'Offline backup copy',
        amber: {
          frameworksAppend: [
            'NIS2 Art.21(2)(c)'
          ]
        }
      }
    ]
  },

  {
    id: 6,
    name: 'Network and Remote Access',
    suppressIf: null,
    inDomainGates: [
      {
        id: 'visitorWiFi',
        question: 'Does your business have WiFi that customers or visitors can use?',
        beforeQuestion: 'Q6.2'
      }
    ],
    questions: [
      {
        id: 'Q6.1',
        text: 'The password on your business broadband router has been changed from the one it came with.',
        tooltip: 'Default router passwords are publicly known and are the first thing attackers try. Changing yours takes under five minutes.',
        legalNote: null, legalOverride: false, suppressIf: null,
        score1Label: 'We are not sure whether this has been changed',
        score2Label: 'Yes — the router password has been changed from the factory default',
        score0Label: 'No — the router is still using the factory default password',
        frameworks: [
          'GDPR Art.32',
          'Cyber Essentials: Firewalls and Internet Gateways; Secure Configuration (default passwords — both core CE controls cover this)',
          'CIS Controls IG1: Control 4 (Secure Configuration), Control 12 (Network Infrastructure Management)',
          'ENISA SME Guide',
          'CyFun® BASIC',
          'NCSC Ireland SME guidance'
        ],
        shortLabel: 'Router password changed'
      },
      {
        id: 'Q6.2',
        text: 'Your visitor or customer WiFi is kept separate from your work network.',
        tooltip: 'Visitors on the same network as your work systems can — accidentally or otherwise — see or interfere with your business data.',
        legalNote: null, legalOverride: false,
        suppressIf: function (s) { return s.inDomainGates.visitorWiFi !== 'Yes'; },
        score1Label: 'We believe it is separate but have not confirmed the settings',
        score2Label: 'Yes — visitor WiFi is separate from our work network and the settings have been confirmed',
        score0Label: 'No — visitor and work WiFi use the same network',
        frameworks: [
          'GDPR Art.32',
          'Cyber Essentials: Firewalls and Internet Gateways (network separation)',
          'CIS Controls IG1: Control 12 (Network Infrastructure Management)',
          'ENISA SME Guide',
          'CyFun® BASIC'
        ],
        shortLabel: 'Visitor WiFi separated'
      },
      {
        id: 'Q6.3',
        text: 'Anyone working remotely or accessing work files from outside uses a secure tool — your business cloud software or a VPN. They do not use unprotected public WiFi.',
        tooltip: 'Public WiFi in cafés, hotels, and other locations is not secure. Work done over it can be intercepted. Cloud business software (Microsoft 365, Google Workspace, accounting platforms) uses a secure connection by default; a VPN does the same job for direct access to office systems.',
        legalNote: null, legalOverride: false,
        suppressIf: function (s) { return s.gate.G3 === 'No'; },
        score1Label: 'We use secure tools but have no written rule about how remote access should work',
        score2Label: 'Yes — all remote access uses a secure connection and we have a written rule in place',
        score0Label: 'No — there are no rules and staff may access work systems over unsecured public WiFi',
        frameworks: [
          'GDPR Art.32',
          'Cyber Essentials: Firewalls and Internet Gateways (boundary controls)',
          'CIS Controls IG1: Control 12 (Network Infrastructure Management)',
          'ENISA SME Guide',
          'CyFun® BASIC'
        ],
        shortLabel: 'Secure remote connections',
        amber: {
          frameworksAppend: [
            'NIS2 Art.21(2)(e): network and information systems security'
          ]
        }
      },
      {
        id: 'Q6.4',
        text: 'There are clear rules about what personal devices can be used for work and how they must be kept secure.',
        tooltip: 'Personal devices used for work that are lost, stolen or infected put business data at risk. A simple written rule about what is and is not allowed makes the position clear for everyone.',
        legalNote: null, legalOverride: false,
        suppressIf: function (s) { return s.gate.G3 === 'No'; },
        score1Label: 'We have informal expectations but these have never been formally communicated or written down',
        score2Label: 'Yes — we have clear written rules about personal devices and staff have been told what they are',
        score0Label: 'No — there are no rules about how personal devices can be used for work',
        frameworks: [
          'GDPR Art.32 (organisational measures covering personal devices)',
          'CIS Controls IG1: Control 1 (Enterprise Asset Inventory — BYOD scoping), Control 6 (Access Control)',
          'ENISA SME Guide',
          'CyFun® BASIC'
        ],
        shortLabel: 'Rules for personal devices'
      },
      {
        id: 'Q6.5',
        text: 'Your router’s firewall is turned on. Any rules that allow connections in from the internet have been reviewed.',
        tooltip: 'A firewall blocks unsolicited inbound connections from the internet. Leaving a router at default settings — or with old port-forwarding rules nobody remembers adding — leaves services exposed that should only be reachable from inside your network.',
        legalNote: null, legalOverride: false, suppressIf: null,
        score1Label: 'A firewall is in place but we have not reviewed what it allows in',
        score2Label: 'Yes — our firewall actively blocks unsolicited inbound connections and the rules have been reviewed',
        score0Label: 'No — our firewall is at default settings or we are not sure if one is configured',
        frameworks: [
          'GDPR Art.32 (appropriate technical measure for network security)',
          'Cyber Essentials: Firewalls and Internet Gateways (one of five core technical controls)',
          'CIS Controls IG1: Control 12 (Network Infrastructure Management), Control 13 (Network Monitoring and Defense)',
          'ENISA SME Guide',
          'CyFun® BASIC',
          'NCSC Ireland SME guidance'
        ],
        shortLabel: 'Firewall configured',
        amber: {
          frameworksAppend: [
            'NIS2 Art.21(2)(e): network and information systems security'
          ]
        }
      },
      {
        id: 'Q6.6',
        text: 'Your business WiFi uses a strong password. You review who knows it when staff or regular visitors change.',
        tooltip: 'A weak or widely-shared business WiFi password gives anyone within range — staff who left, contractors who finished a job, regulars in a shared building — a route onto your work network.',
        legalNote: null, legalOverride: false, suppressIf: null,
        score1Label: 'The WiFi has a password but it has been the same for a long time and we have not reviewed who knows it',
        score2Label: 'Yes — our business WiFi has a strong unique password and we review who has it when staff or regulars change',
        score0Label: 'No — our business WiFi password is weak, shared widely, or the same as the router default',
        frameworks: [
          'GDPR Art.32 (appropriate technical measure for network security)',
          'Cyber Essentials: Firewalls and Internet Gateways (network access controls)',
          'CIS Controls IG1: Control 12 (Network Infrastructure Management)',
          'ENISA SME Guide',
          'CyFun® BASIC'
        ],
        shortLabel: 'Business WiFi password'
      }
    ]
  },

  {
    id: 7,
    name: 'Staff Awareness',

    suppressIf: function (s) {
      return s.gate.G2 === 'Just me' && s.gate.G6 === 'No';
    },
    questions: [
      {
        id: 'Q7.1',
        text: 'Staff have been told what to look out for in suspicious emails and messages, and what to do if they receive one.',
        tooltip: 'Fake emails are the most common way attackers get into business systems. Staff who know what to look for are your first line of defence.',
        legalNote: null, legalOverride: false,
        suppressIf: function (s) { return s.gate.G2 === 'Just me'; },
        score1Label: 'We have done this but have not kept any written record',
        score2Label: 'Yes — staff have been briefed and we have a written record of when it happened and what was covered',
        score0Label: 'No — staff have not been told what to look out for in suspicious emails or messages',
        frameworks: [
          'GDPR Art.32(4): organisational measures must include staff awareness',
          'CIS Controls IG1: Control 14 (Security Awareness and Skills Training)',
          'ENISA SME Guide',
          'CyFun® BASIC',
          'NCSC Ireland SME guidance'
        ],
        shortLabel: 'Phishing awareness for staff',
        amber: {
          frameworksAppend: [
            'NIS2 Art.21(2)(g): cybersecurity hygiene practices and training'
          ]
        }
      },
      {
        id: 'Q7.2',
        text: 'Staff know who to contact if they think a device, account, or file has been accessed or tampered with.',
        tooltip: 'Staff who spot a problem but do not know who to tell often say nothing. A named contact removes that barrier.',
        legalNote: null, legalOverride: false,
        suppressIf: function (s) { return s.gate.G2 === 'Just me'; },
        score1Label: 'Staff are likely aware of who to contact but this has never been formally communicated or written down',
        score2Label: 'Yes — staff know who to contact and this is written down and visible to everyone',
        score0Label: 'No — staff have not been told who to contact if they suspect a security problem',
        frameworks: [
          'GDPR Art.32(4)',
          'CIS Controls IG1: Control 17.3 (Establish and Maintain Contact Information for Reporting Security Incidents)',
          'ENISA SME Guide',
          'CyFun® BASIC'
        ],
        shortLabel: 'Staff know who to report to'
      },
      {
        id: 'Q7.3',
        text: 'New staff receive basic guidance on keeping business data and systems safe when they start.',
        tooltip: 'New staff are the most likely to make security mistakes — not out of carelessness, but because they do not yet know your systems or your expectations.',
        legalNote: null, legalOverride: false,
        suppressIf: function (s) { return s.gate.G2 === 'Just me'; },
        score1Label: 'We have done this but have not kept any written record',
        score2Label: 'Yes — new starters receive a written security briefing and we keep a record of who received it',
        score0Label: 'No — new staff do not receive security guidance when they join',
        frameworks: [
          'GDPR Art.32(4)',
          'CIS Controls IG1: Control 14.7 (Train Workforce on Identifying and Reporting Security Incidents)',
          'ENISA SME Guide',
          'CyFun® BASIC'
        ],
        shortLabel: 'New starter security briefing',
        amber: {
          frameworksAppend: [
            'NIS2 Art.21(2)(g): training'
          ]
        }
      },
      {
        id: 'Q7.4',
        text: 'In the past year, your business has had at least one staff conversation or briefing about online security.',
        tooltip: 'Security awareness is not a one-time task. Threats change, staff change, and a brief annual conversation keeps everyone on the same page.',
        legalNote: null, legalOverride: false,
        suppressIf: function (s) { return s.gate.G2 === 'Just me'; },
        score1Label: 'We have done this but have not kept any written record',
        score2Label: 'Yes — we have had at least one security conversation with staff this year and kept a note of it',
        score0Label: 'No — we have not had a security conversation with staff in the past year',
        frameworks: [
          'GDPR Art.32(4)',
          'CIS Controls IG1: Control 14 (Security Awareness and Skills Training)',
          'ENISA SME Guide',
          'CyFun® BASIC',
          'NIST CSF 2.0: PR.AT (Protect — Awareness and Training)'
        ],
        shortLabel: 'Annual security conversation',
        amber: {
          frameworksAppend: [
            'NIS2 Art.21(2)(g): training'
          ]
        }
      },
      {
        id: 'Q7.5',
        text: 'Card numbers taken over the phone are never written down or stored. The payment is processed right away and no record is kept.',
        tooltip: 'Card numbers saved on paper or in a document are a significant security and legal risk. Payment card industry rules prohibit storing them this way.',
        legalNote: null, legalOverride: false,
        suppressIf: function (s) { return s.gate.G6 === 'No'; },
        score2Label: 'Yes — card numbers are never written down or stored and we have a written rule confirming this',
        score0Label: 'No — card numbers are written down or stored at some point during the payment process',
        frameworks: [
          'GDPR Art.5(1)(c): data minimisation; Art.32: security of processing',
          'ENISA SME Guide: data protection section'
        ],
        shortLabel: 'Phone payment numbers not stored'
      }
    ]
  },

  {
    id: 8,
    name: 'Third Parties and Suppliers',

    suppressIf: function (s) { return s.gate.G4 === 'No'; },
    questions: [
      {
        id: 'Q8.1',
        text: 'You know which outside companies handle personal data for your business.',
        tooltip: 'Examples include payroll providers, cloud accounting software, email marketing platforms, and IT support companies. Each one is a potential weak point if not properly managed.',
        legalNote: null, legalOverride: false,
        suppressIf: function (s) { return s.gate.G4 === 'No'; },
        score1Label: 'We have a rough idea of who our suppliers are but have no written list',
        score2Label: 'Yes — we have a written list of all outside companies that handle personal data for us',
        score0Label: 'No — we have not identified which outside companies handle personal data on our behalf',
        frameworks: [
          'GDPR Art.28 (processor identification is a prerequisite to Art.28 compliance)',
          'CIS Controls IG1: Control 15 (Service Provider Management)',
          'ENISA SME Guide',
          'CyFun® BASIC: supply chain'
        ],
        shortLabel: 'List of suppliers handling data',
        amber: {
          frameworksAppend: [
            'NIS2 Art.21(2)(d): supply chain security'
          ]
        }
      },
      {
        id: 'Q8.2',
        text: 'Every outside company that handles personal data for you has a written agreement in place.',
        tooltip: null,
        legalNote: 'GDPR Article 28 requires a written contract to be in place with any company that processes personal data on your behalf. This applies regardless of business size and includes software providers, IT support companies, and payroll services.',
        legalOverride: true,
        suppressIf: function (s) { return s.gate.G4 === 'No'; },
        score1Label: 'Some agreements may be in place but we have not checked',
        score2Label: 'Yes — written agreements are in place with all our data processors and stored in one location',
        score0Label: 'No — we do not have written agreements with companies that handle data for us',
        frameworks: [
          'GDPR Art.28: direct and explicit legal requirement — written contract mandatory',
          'CIS Controls IG1: Control 15.1 (Establish and Maintain a Supplier Management Programme)',
          'ENISA SME Guide'
        ],
        shortLabel: 'Written agreements with processors'
      },
      {
        id: 'Q8.3',
        text: 'Before using an outside company, you check they take the security of your data seriously.',
        tooltip: 'This does not need to be complex. Checking a provider’s privacy policy, asking them directly about security, or confirming they hold a recognised certification are all valid approaches.',
        legalNote: null, legalOverride: false,
        suppressIf: function (s) { return s.gate.G4 === 'No'; },
        score1Label: 'We think about this informally but have no consistent process or written record',
        score2Label: 'Yes — we check supplier security before using them and have a record of what we found',
        score0Label: 'No — we do not check the security of outside companies before sharing personal data with them',
        frameworks: [
          'GDPR Art.28 (due diligence on processors)',
          'CIS Controls IG1: Control 15 (Service Provider Management)',
          'ENISA SME Guide',
          'CyFun® BASIC: supply chain',
          'ISO/IEC 27001:2022: Annex A.5.19–5.22 (Supplier Relationships)'
        ],
        shortLabel: 'Supplier security checks',
        amber: {
          frameworksAppend: [
            'NIS2 Art.21(2)(d): assessment of direct suppliers’ security practices'
          ],
          text: 'Before using an outside company, you check their cybersecurity. This includes how they would tell you if their systems were compromised.',
          legalNote: 'NIS2 Article 21(2)(d) requires in-scope businesses to assess the security practices of direct suppliers and service providers. This goes beyond checking a privacy policy. It includes their vulnerability management, their incident response capability, and how a breach of their systems could spread into yours.',
          score1Label: 'We check supplier privacy policies but do not assess their broader security posture or incident response capability',
          score0Label: 'No — we do not assess the cybersecurity measures of outside companies before sharing data or system access with them'
        }
      },
      {
        id: 'Q8.4',
        text: 'Outside companies or contractors can only access the parts of your systems and data they need for their work.',
        tooltip: 'Giving a supplier or IT contractor more access than they need creates unnecessary risk. Access should be limited to what is required and removed when the work is done.',
        legalNote: null, legalOverride: false,

        suppressIf: function (s) { return s.gate.G4 === 'No'; },
        score1Label: 'We try to limit access but this has never been formally reviewed or written down',
        score2Label: 'Yes — external access has been formally reviewed and limited to what is needed for each engagement',
        score0Label: 'No — outside companies or contractors may have broader system access than they need',
        frameworks: [
          'GDPR Art.5(1)(f), Art.32 (principle of least privilege extended to third parties)',
          'CIS Controls IG1: Control 15.6 (Monitor Third-Party Service Providers)',
          'ENISA SME Guide',
          'CyFun® BASIC'
        ],
        shortLabel: 'Limit supplier access',
        amber: {
          frameworksAppend: [
            'NIS2 Art.21(2)(d)'
          ]
        }
      }
    ]
  }
];
