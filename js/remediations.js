const REMEDIATIONS = {};

REMEDIATIONS['Q1.1'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'Shared logins mean you have no way of knowing who accessed what if something goes wrong. You also have no way to limit the damage if the login is compromised. Under GDPR Article 32, the DPC expects businesses to be able to show who accessed personal data and when. This is only possible if everyone logs in with their own account.',
    whyLegal: null,
    steps: [
      'Step 1: Make a list of every system and account your business uses — email, accounting software, cloud storage, and any other tools your team works with.',
      'Step 2: For each system, check whether everyone who uses it has their own separate login. Where they do not, contact the service provider to set up individual accounts — most services allow this at no extra cost.',
      'Step 3: Once individual accounts are in place, remove the shared login and write down who has access to what. Keep this list somewhere safe.'
    ],
    resources: [
      { label: 'Data Protection Commission — guidance for SMEs', url: 'www.dataprotection.ie/en/dpc-guidance/guidance-for-smes' }
    ],
    time: 'approximately 2 hours, depending on how many systems your business uses.'
  },
  1: {
    acknowledgement: 'Everyone logs in separately — the only thing missing is a written record. Without one, leaver removal becomes a guessing game, and an unused account can sit active for years without anyone noticing.',
    whyDocument: null,
    writtenRecord: [
      'A simple list of your business systems and who has an account on each one',
      'A note of who is responsible for adding or removing accounts when staff change',
      'Keep this in a shared folder or document your team can access'
    ],
    time: 'approximately 1 hour.'
  },
  2: {
    confirmation: 'Everyone has their own login and this is written down.',
    nextStep: 'Review the list of who has access to what at least once a year — or straight away when someone’s role changes — to make sure access stays appropriate.'
  }
};

REMEDIATIONS['Q1.2'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'Without a second step, a stolen or guessed password is all an attacker needs to reach your email, your files, and your customer data. The DPC lists two-step login as an expected technical measure for any account holding personal data under GDPR Article 32.',
    whyLegal: null,
    steps: [
      'Step 1: Start with your business email account — this is the most important account to protect. Go to the account security settings and look for "two-step verification", "two-factor authentication", or "login verification". Turn it on.',
      'Step 2: Choose to receive a code by text message, or use a free app such as Google Authenticator or Microsoft Authenticator. Follow the on-screen setup — it takes under five minutes.',
      'Step 3: Once your email is protected, repeat for any other account that holds important data — accounting software, cloud storage, payroll systems.'
    ],
    resources: [
      { label: 'NCSC Ireland — small business security', url: 'www.ncsc.gov.ie/smallbusiness' }
    ],
    time: 'approximately 30 minutes per account.'
  },
  1: {
    acknowledgement: 'Some accounts are protected, but the ones without the second step remain fully vulnerable regardless. A short list of which accounts still need it is all that’s required to make sure nothing gets missed.',
    whyDocument: null,
    writtenRecord: [
      'Make a list of all your business accounts and mark which ones have the second step active',
      'For each account where it is not yet turned on, set a target date to add it — start with email and accounting software',
      'Keep this list somewhere you will check when setting up any new account'
    ],
    time: 'approximately 30 minutes.'
  },
  2: {
    confirmation: 'Two-step login is active on all your key business accounts.',
    nextStep: 'Check that any new business accounts are added to your list — it is easy for a new tool or service to be set up without the second step turned on.'
  }
};

REMEDIATIONS['Q1.3'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'Short or reused passwords are one of the most common ways business accounts are broken into — automated tools can guess weak passwords in seconds. The DPC expects strong credentials as part of the technical measures required under GDPR Article 32.',
    whyLegal: null,
    steps: [
      'Step 1: Choose a free password manager — Bitwarden is free, open source, and widely trusted. Download it and create an account using a strong passphrase of four or more random words, for example "lamp-river-clock-seven."',
      'Step 2: Use the password manager to generate a new strong password for your most important accounts. Start with email. Then accounting software. Then any system holding customer or staff data.',
      'Step 3: For any accounts not yet in the password manager, make sure the password is at least 12 characters long and not used anywhere else.'
    ],
    resources: [
      { label: 'NCSC UK — using password managers', url: 'www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/password-managers' }
    ],
    time: 'approximately 1–2 hours to set up and update your most important accounts.'
  },
  1: {
    whyDocumentLabel: 'What to do first',
    writtenRecordLabel: 'Action steps',
    acknowledgement: 'Most accounts are covered, but the remaining ones are still fully exposed. Those are often the ones people forget. A password manager fixes this in one step. It generates strong passwords for every account automatically, including the ones that get overlooked.',
    whyDocument: null,
    writtenRecord: [
      'Install a free password manager such as Bitwarden and use it to generate new passwords for any accounts not yet covered — start with email, then accounting software',
      'Write a one-line rule that all work accounts use passwords from the password manager',
      'Note where the password manager login details are stored and who is responsible for it'
    ],
    time: 'approximately 1 hour.'
  },
  2: {
    confirmation: 'All work accounts use a password manager with strong, unique passwords.',
    nextStep: 'Check that any new accounts set up in the past year follow the same standard — new tools and services are easy to set up quickly without applying the same care.'
  }
};

REMEDIATIONS['Q1.4'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'An active account belonging to someone who has already left is an open door — if it gets compromised, the damage can be significant before anyone notices. The DPC expects access to personal data to be removed the moment it is no longer needed.',
    whyLegal: null,
    steps: [
      'Step 1: Make a list of every system and account your business uses. Work through your list and check whether anyone who has left still has an active account anywhere. Remove any you find.',
      'Step 2: Write a simple rule — for example "on a person’s last day, their access to all work systems is removed before they leave." Write down who is responsible for doing this.',
      'Step 3: Keep this rule somewhere visible to whoever manages account access — alongside your access list from Q1.1.'
    ],
    resources: [
      { label: 'NCSC Ireland — access management', url: 'www.ncsc.gov.ie/smallbusiness' }
    ],
    time: 'approximately 1–2 hours to create the process and complete an initial check.'
  },
  1: {
    acknowledgement: 'Access gets removed when people leave, but relying on memory means a rushed or difficult departure is exactly when something gets missed. One overlooked account is one phishing email away from a serious incident.',
    whyDocument: null,
    writtenRecord: [
      'A written step that says access is removed on the last day, and who is responsible',
      'This can be a single line added to an existing new-starter or leaver checklist',
      'Keep it somewhere the responsible person will see it when someone leaves'
    ],
    time: 'approximately 30 minutes.'
  },
  2: {
    confirmation: 'Access is removed when people leave and the process is written down.',
    nextStep: 'Carry out a quick check every six months to confirm no inactive accounts have been missed — it takes under 30 minutes and catches anything that slipped through.'
  }
};

REMEDIATIONS['Q1.5'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'An admin account taken over through a routine phishing email gives an attacker full control of your systems, not just access to one person’s files. Separating admin from everyday accounts is a baseline requirement of Cyber Essentials and the CIS Controls. It limits how far a successful attack can reach.',
    whyLegal: null,
    steps: [
      'Step 1: Identify any accounts in your business that have full administrator access — on computers, email systems, or cloud services. These are usually labelled "admin" or "owner" in settings.',
      'Step 2: If these admin accounts are used for everyday tasks like email or browsing, create a separate standard account for those activities. Use the admin account only when making changes to settings or systems.',
      'Step 3: Write down which accounts have admin access and who is responsible for them. Review this list whenever someone joins or leaves.'
    ],
    resources: [
      { label: 'NCSC UK — managing administrator accounts', url: 'www.ncsc.gov.uk/collection/small-business-guide' }
    ],
    time: 'approximately 1–2 hours to set up separate accounts and document them.'
  },
  1: {
    acknowledgement: 'Admin accounts are kept separate. This limits the damage from any single account being breached. A written record confirms the separation is still in force. Without it, an admin account can quietly drift back into everyday use.',
    whyDocument: null,
    writtenRecord: [
      'A list of accounts with admin access and who holds them',
      'A note that admin accounts are not used for email or everyday browsing',
      'Keep this alongside your other access records'
    ],
    time: 'approximately 30 minutes.'
  },
  2: {
    confirmation: 'Admin accounts are only used for admin tasks and are kept separate from everyday accounts.',
    nextStep: 'Check that any new systems or services have separate admin and standard accounts from the start. It is harder to separate them later.'
  }
};

REMEDIATIONS['Q2.1'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'Most successful attacks use known vulnerabilities that a security update would have already fixed. Keeping devices up to date is a core Cyber Essentials requirement. It is also an appropriate technical measure under GDPR Article 32.',
    whyLegal: null,
    steps: [
      'Step 1: On each work device, go to settings and check when the last update was installed. Look for "Windows Update" on Windows devices or "Software Update" on Macs and iPhones. Install any waiting updates now.',
      'Step 2: Turn on automatic updates on every work device so future updates install without you needing to remember. This setting is in the same place as Step 1 on most devices.',
      'Step 3: Make a note of which devices you have checked and when. Repeat this check for any device that cannot be set to update automatically.'
    ],
    resources: [
      { label: 'NCSC Ireland — keeping devices updated', url: 'www.ncsc.gov.ie/smallbusiness' }
    ],
    time: 'approximately 30 minutes per device, plus time for updates to install.'
  },
  1: {
    acknowledgement: 'Automatic updates are running on most devices — a quick check to confirm the rest and note it down closes the gap. Without a record, devices that can’t update automatically tend to be the ones that get forgotten.',
    whyDocument: null,
    writtenRecord: [
      'A list of work devices and whether automatic updates are turned on for each',
      'A note of when you last manually checked any device that cannot update automatically',
      'Keep this with your other device records'
    ],
    time: 'approximately 30 minutes.'
  },
  2: {
    confirmation: 'All work devices have automatic updates turned on and are checked regularly.',
    nextStep: 'Set a reminder to check devices that cannot update automatically. Examples are older printers or specialist equipment. Check them at least every three months.'
  }
};

REMEDIATIONS['Q2.2'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'A single bad email attachment or download is enough to give an attacker access to everything on an unprotected device. That includes your files, your passwords, and your customer data. Malware protection is a core Cyber Essentials requirement. It is also an appropriate technical measure under GDPR Article 32.',
    whyLegal: null,
    steps: [
      'Step 1: Check whether your work devices already have protection installed. Windows devices include Windows Defender by default — search for "Windows Security" in the Start menu and check it is turned on and up to date.',
      'Step 2: For any device without protection, turn on Windows Defender or, for Macs, confirm the built-in XProtect is active through System Settings. Both are free and sufficient for most small businesses.',
      'Step 3: Make sure protection is set to update automatically. Write down which devices have protection installed and when it was last checked.'
    ],
    resources: [
      { label: 'NCSC UK — protecting against malware', url: 'www.ncsc.gov.uk/collection/small-business-guide' }
    ],
    time: 'approximately 30 minutes per device.'
  },
  1: {
    acknowledgement: 'Protection is in place on some devices — confirming the rest and writing it down is what turns partial coverage into a complete picture.',
    whyDocument: null,
    writtenRecord: [
      'A list of work devices and what protection is installed on each one',
      'A note of when protection was last updated or confirmed active',
      'Keep this with your other device records'
    ],
    time: 'approximately 30 minutes.'
  },
  2: {
    confirmation: 'All work devices have protection against harmful software installed and up to date.',
    nextStep: 'Check every three months that protection is active and up to date on every work device. Automatic updates can fail silently. The only way to spot a stalled device is to check.'
  }
};

REMEDIATIONS['Q2.3'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'Default passwords and factory settings are publicly listed. They are the first thing an attacker tries. Secure configuration is a specific Cyber Essentials requirement. It is also an appropriate technical measure under GDPR Article 32.',
    whyLegal: null,
    steps: [
      'Step 1: Check every work device for default passwords — broadband router, network storage, printers, and smart devices used for work — and change any still at the factory setting. On laptops and phones, also confirm a screen lock is enabled (PIN, password, or biometric); a device left on a train without a lock is a personal data breach.',
      'Step 2: On each work device, go to settings and turn off any features not used for work — Bluetooth when not needed, remote access features you do not use, or location sharing. Fewer features running means fewer ways in for an attacker.',
      'Step 3: Write down which devices you have checked and what changes you made (including screen lock status). Add this to any future device setup process so new devices are secured before first use.'
    ],
    resources: [
      { label: 'NCSC UK — securing devices', url: 'www.ncsc.gov.uk/collection/small-business-guide' }
    ],
    time: 'approximately 1 hour for existing devices; 30 minutes per new device going forward.'
  },
  1: {
    acknowledgement: 'Some devices are set up correctly — the written checklist is what ensures every new one gets the same treatment. Without it, new devices get set up quickly and default settings stay in place.',
    whyDocument: null,
    writtenRecord: [
      'A note of which devices have had their default settings reviewed',
      'A brief checklist for new devices — change default password, turn off unused features',
      'Keep this somewhere it will be used when a new device is added'
    ],
    time: 'approximately 30 minutes.'
  },
  2: {
    confirmation: 'Devices are set up securely and the process is written down.',
    nextStep: 'Device encryption is now covered by its own question (Q2.6) — confirm encryption is enabled on every laptop and portable device alongside the secure-setup checks here.'
  }
};

REMEDIATIONS['Q2.4'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'You can’t keep devices secure if you don’t know they exist — a forgotten old laptop with business data on it is a risk that won’t show up in any check. The CIS Controls list device inventory as the foundation for every other device security measure.',
    whyLegal: null,
    steps: [
      'Step 1: Make a list of every device used for work in your business — computers, laptops, phones, tablets, and any other device that connects to your systems or holds business data. Include personal devices used for work if applicable.',
      'Step 2: For each device, note who is responsible for it and whether it is owned by the business or personally owned.',
      'Step 3: Keep this list in a shared document or folder and update it whenever a device is added, removed, or changes hands.'
    ],
    resources: [
      { label: 'NCSC Ireland — device management', url: 'www.ncsc.gov.ie/smallbusiness' }
    ],
    time: 'approximately 1 hour to create the initial list.'
  },
  1: {
    acknowledgement: 'There’s a rough picture of what devices are in use — writing it down is what makes it something you can act on. A device that needs to be wiped or located quickly is not the moment to be working out whether you have a record of it.',
    whyDocument: null,
    writtenRecord: [
      'A simple list of devices, who uses each one, and whether it is business-owned or personal',
      'A note of who is responsible for keeping the list current',
      'Updated whenever a device is added or removed'
    ],
    time: 'approximately 1 hour.'
  },
  2: {
    confirmation: 'You know what devices your business uses and this is written down.',
    nextStep: 'Check the list against the devices actually in use every six months. Also check whenever someone joins or leaves. Devices change hands quietly and old ones get missed.'
  }
};

REMEDIATIONS['Q3.1'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'If you do not know what personal information your business holds, you cannot protect it. You also cannot respond properly if a customer asks to see it or if a breach occurs. GDPR requires businesses to be clear about what data they hold, why, and for how long. This sits beneath almost every other GDPR obligation.',
    whyLegal: null,
    steps: [
      'Step 1: Think through every way your business collects personal information — contact forms, bookings, purchases, staff records, supplier contacts. Make a list of each category.',
      'Step 2: For each category, note three things. What information you hold, for example name, email address, or phone number. Why you hold it, for example to fulfil orders or to pay staff. Roughly how long you keep it.',
      'Step 3: Keep this list somewhere you can update it when your business changes — a simple spreadsheet or document is enough.'
    ],
    resources: [
      { label: 'Data Protection Commission — guidance for SMEs', url: 'www.dataprotection.ie/en/dpc-guidance/guidance-for-smes' }
    ],
    time: 'approximately 2–3 hours for an initial data audit, depending on the range of data your business handles.'
  },
  1: {
    acknowledgement: 'You have a general sense of what personal information the business holds. Writing it down turns that into something you can show a customer or the DPC.',
    whyDocument: null,
    writtenRecord: [
      'A list of the types of personal data your business holds',
      'Why you hold each type and roughly how long you keep it',
      'Where each type is stored — email, spreadsheet, software system'
    ],
    time: 'approximately 2 hours.'
  },
  2: {
    confirmation: 'You know what personal data your business holds and it is written down.',
    nextStep: 'Review this record once a year. Also review it whenever your business starts collecting a new type of information. Data inventories go out of date quickly.'
  }
};

REMEDIATIONS['Q3.2'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'If everyone in the business can access all personal data, the risk of accidental exposure is far higher than it needs to be. If any account is breached, an attacker can see everything. GDPR requires that personal data is accessible only to people with a legitimate need for it.',
    whyLegal: null,
    steps: [
      'Step 1: Think through who in your business actually needs access to customer data, staff records, and other personal information to do their job. Not everyone needs access to everything.',
      'Step 2: Check the access settings on the systems where personal data is stored — most cloud software allows you to set different access levels for different users. Restrict access so each person can see only what they need.',
      'Step 3: Write down your access decisions — who can see what and why. A simple table is enough.'
    ],
    resources: [
      { label: 'Data Protection Commission — access control guidance', url: 'www.dataprotection.ie/en/dpc-guidance/guidance-for-smes' }
    ],
    time: 'approximately 1–2 hours to review and adjust access settings.'
  },
  1: {
    acknowledgement: 'Access to personal data is being limited, but without a formal review there’s no way to be certain the reality matches the intention. Writing down who can see what means you can demonstrate it if asked.',
    whyDocument: null,
    writtenRecord: [
      'A note of which staff have access to which types of personal data',
      'A brief reason why each person needs that access',
      'Keep this with your other data records'
    ],
    time: 'approximately 1 hour.'
  },
  2: {
    confirmation: 'Access to personal data is limited and documented.',
    nextStep: 'Review who has access to what every year. Also check whenever someone’s role changes. Access permissions build up quietly when no one is checking.'
  }
};

REMEDIATIONS['Q3.3'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'Under GDPR Article 30, most businesses that handle personal data must keep a written record of their processing activities. The DPC can ask to see it at any time. Without one, you cannot respond properly to a customer asking about their data or to a request from the DPC.',
    whyLegal: null,
    steps: [
      'Step 1: Download the DPC’s free template for a Record of Processing Activities from their website — it sets out exactly what you need to document and is designed for small businesses.',
      'Step 2: Fill in one row for each type of personal data your business handles — for example, customer orders, staff payroll, supplier contacts, or newsletter subscribers. For each, note what data you hold, why, how long you keep it, and where it is stored.',
      'Step 3: Save the completed record somewhere secure and note the date it was created. Update it whenever your business starts or stops processing a new type of data.'
    ],
    resources: [
      { label: 'Data Protection Commission — Record of Processing Activities', url: 'www.dataprotection.ie/en/organisations/know-your-obligations/record-processing-activities' }
    ],
    time: 'approximately 2–3 hours to complete an initial record.'
  },
  1: {
    acknowledgement: 'Some notes exist, which is a useful start — but incomplete records don’t satisfy the GDPR Article 30 requirement. The DPC can ask to see the Record of Processing Activities at any time, and partial notes wouldn’t constitute a compliant record.',
    whyDocument: null,
    writtenRecord: [
      'Download the DPC’s free Record of Processing Activities template — it sets out exactly what a compliant record needs to include',
      'Work through your existing notes and transfer each item into the template, filling any gaps as you go',
      'Save the completed record somewhere secure, note the date it was completed, and update it whenever your business starts or stops processing a new type of data'
    ],
    resources: [
      { label: 'Data Protection Commission — Record of Processing Activities', url: 'www.dataprotection.ie/en/organisations/know-your-obligations/record-processing-activities' }
    ],
    time: 'approximately 1–2 hours to complete from partial notes.'
  },
  2: {
    confirmation: 'Your record of processing activities is in place and up to date.',
    nextStep: 'Review the record every year. Update it whenever your business starts a new activity that involves personal data. Examples are a new newsletter, payroll provider, or online booking system.'
  }
};

REMEDIATIONS['Q3.4'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'Data you no longer need but have not deleted can still be stolen or leaked. You are still responsible for it. GDPR requires that personal data is kept only as long as necessary. Keeping it forever is a specific compliance failure that can lead to enforcement action.',
    whyLegal: null,
    steps: [
      'Step 1: Think about how long your business genuinely needs each type of personal data — for example: customer contact details after a completed order, staff payroll records, or old job applications. Write down a simple rule for each type.',
      'Step 2: Go through your current files, email folders, and cloud storage and delete personal data that falls outside these timeframes. Empty the bin or recycle folder afterwards.',
      'Step 3: For printed documents or paper records containing personal data, shred them rather than putting them in general waste.'
    ],
    resources: [
      { label: 'Data Protection Commission — data retention guidance', url: 'www.dataprotection.ie/en/dpc-guidance/guidance-for-smes' }
    ],
    time: 'approximately 2 hours to set retention rules and carry out an initial clear-out.'
  },
  1: {
    acknowledgement: 'Personal data gets deleted when it comes to mind. Without a written rule, data that should have been gone months ago is likely still sitting in your files.',
    whyDocument: null,
    writtenRecord: [
      'A simple list of data types and how long you keep each one — for example "staff records: 7 years after employment ends"',
      'A note of how data is deleted — emptying folders, shredding documents',
      'A reminder to carry out a clear-out at least once a year'
    ],
    time: 'approximately 1 hour.'
  },
  2: {
    confirmation: 'Personal data is deleted when no longer needed and retention rules are written down.',
    nextStep: 'Set an annual calendar reminder to carry out a data clear-out — it is easy to let this slip without a prompt.'
  }
};

REMEDIATIONS['Q4.1'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'If you can’t recognise a data breach when it happens, you can’t respond in time — and GDPR places strict timeframes on exactly that response. Knowing what counts as a breach is the prerequisite to everything that follows.',
    whyLegal: null,
    steps: [
      'Step 1: Read the DPC’s plain-language guidance on what counts as a data breach. A breach is any incident where personal data is accessed, lost, changed, or shared without authorisation — including sending an email to the wrong person, losing a phone with work data on it, or an unauthorised person viewing a file.',
      'Step 2: Make a short list of the breach scenarios most likely to affect your business. Examples are a misdirected email, a stolen device, or an outside contractor seeing data they should not have.',
      'Step 3: Write down who would need to know if one of these things happened, and make sure that person’s name and contact details are recorded next to the list.'
    ],
    resources: [
      { label: 'Data Protection Commission — what is a personal data breach', url: 'www.dataprotection.ie/en/organisations/know-your-obligations/breach-notification' }
    ],
    time: 'approximately 1 hour to read the guidance and create your scenario list.'
  },
  1: {
    acknowledgement: 'There is a general sense of what a data breach is. Writing down the scenarios most likely to affect your business makes that useful. The people most likely to spot a breach are then ready to act.',
    whyDocument: null,
    writtenRecord: [
      'A short list of breach scenarios relevant to your business',
      'The name and contact of the person responsible for handling a breach',
      'Keep this somewhere all staff can find it'
    ],
    time: 'approximately 30 minutes.'
  },
  2: {
    confirmation: 'You know what a data breach is and have documented the scenarios most relevant to your business.',
    nextStep: 'Share the list with all staff at least once a year — the people most likely to spot a breach first are often those least likely to know what one looks like.'
  }
};

REMEDIATIONS['Q4.2'] = {
  0: {
    legalAlert: 'GDPR requires you to report certain data breaches to the Data Protection Commission within 72 hours of becoming aware of them (Article 33). In serious cases — where a breach poses a high risk to the people whose data was affected — you must also notify those individuals directly (Article 34). Both obligations apply to your business regardless of size.',
    whatThisMeans: 'Without a defined process, 72 hours passes very quickly. Missed or late notifications are one of the most commonly cited failures in DPC enforcement action, regardless of business size. Having the process written down before an incident is what makes the difference.',
    whyLegal: null,
    steps: [
      'Step 1: Bookmark the DPC’s online breach notification form now, before you need it. The form guides you through what information is required. It is at www.dataprotection.ie/en/organisations/know-your-obligations/breach-notification',
      'Step 2: Write a one-page note that covers three things. Who in your business decides whether a breach needs to be reported. How to contact them. What information they will need to gather: what happened, what data was involved, and how many people are affected.',
      'Step 3: Record when you also need to notify the people affected directly — this applies when a breach is likely to cause them real harm, such as identity theft or financial loss. Your DPC notification guidance covers when this applies.'
    ],
    resources: [
      { label: 'Data Protection Commission — breach notification', url: 'www.dataprotection.ie/en/organisations/know-your-obligations/breach-notification' },
      { label: 'NCSC Ireland — incident response', url: 'www.ncsc.gov.ie/pdfs/Cyber_Incident_Response.pdf' }
    ],
    time: 'approximately 2 hours to create the notification process.'
  },
  1: {
    whyDocumentLabel: 'What to do first',
    writtenRecordLabel: 'Action steps',
    acknowledgement: 'The obligation is understood — but under pressure, awareness alone isn’t enough. The 72-hour clock starts the moment you become aware of a breach, not when you finish working out what to do. A one-page written process means whoever is available on the day can act immediately.',
    whyDocument: null,
    writtenRecord: [
      'Bookmark the DPC’s online breach notification form now. The form is at www.dataprotection.ie/en/organisations/know-your-obligations/breach-notification',
      'Write a single-page note setting out: who decides whether a breach needs to be reported, how to contact them, and what information they will need to gather',
      'Add a note on when you also need to notify the affected individuals directly — your DPC guidance covers when this applies'
    ],
    resources: [
      { label: 'Data Protection Commission — breach notification', url: 'www.dataprotection.ie/en/organisations/know-your-obligations/breach-notification' },
      { label: 'NCSC Ireland — incident response', url: 'www.ncsc.gov.ie/pdfs/Cyber_Incident_Response.pdf' }
    ],
    time: 'approximately 2 hours.'
  },
  2: {
    confirmation: 'Your breach notification process covers both the DPC and affected individuals, and is written down.',
    nextStep: 'Walk through the process with your team once a year — the 72-hour clock starts the moment you become aware of a breach, not when you finish working out what to do.'
  }
};

REMEDIATIONS['Q4.3'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'The middle of an incident is the worst time to work out who is in charge. Every minute spent on that question is a minute of damage spreading. Naming a person in advance is required by GDPR’s organisational measures, the ENISA SME guide, and the CIS Controls.',
    whyLegal: null,
    steps: [
      'Step 1: Decide who in your business is the first point of contact if a security incident is suspected. In most small businesses this is the owner or most senior person available. Write their name and phone number down.',
      'Step 2: Decide who covers that responsibility if the first person is unavailable — on holiday, unwell, or the incident affects them directly. Write this person’s details down too.',
      'Step 3: Keep both names and contact details somewhere all staff can find in an emergency — not only in the designated person’s own phone or email.'
    ],
    resources: [
      { label: 'NCSC Ireland — incident response guidance', url: 'www.ncsc.gov.ie/pdfs/Cyber_Incident_Response.pdf' }
    ],
    time: 'approximately 30 minutes.'
  },
  1: {
    acknowledgement: 'There is an obvious person who would handle an incident. Writing their contact details somewhere visible lets staff reach them right away. They will not have to think about it under pressure.',
    whyDocument: null,
    writtenRecord: [
      'The name and contact details of the person responsible for incidents',
      'A named backup if that person is unavailable',
      'Where this information is kept so all staff can find it'
    ],
    time: 'approximately 30 minutes.'
  },
  2: {
    confirmation: 'There is a named person responsible for incidents and this is written down and accessible to all staff.',
    nextStep: 'Make sure your IT support provider and any outside contractors also know who to contact. Incidents often come to their attention first.'
  }
};

REMEDIATIONS['Q4.4'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'Without a written plan, important steps get missed in the chaos of an incident. Evidence gets lost, customers do not get notified, and recovery takes far longer than it should. Documented incident response is expected under GDPR Article 32. It is also a specific requirement under NIS2 Article 21(2)(b) for in-scope entities.',
    whyLegal: null,
    steps: [
      'Step 1: Write a simple one-page plan with four sections. Recognise that an incident has happened. List who to contact first, inside and outside the business, including your IT support. Contain the problem straight away by disconnecting a device or changing a compromised password. Recover by restoring from backup and re-securing accounts.',
      'Step 2: Include the DPC breach notification link and the name of your incident lead from Q4.3. Add your IT support contact number if relevant.',
      'Step 3: Keep the plan somewhere accessible — a shared folder, or a printed copy in a drawer. It must be findable without using the device that may have been compromised.'
    ],
    resources: [
      { label: 'NCSC Ireland — incident response', url: 'www.ncsc.gov.ie/pdfs/Cyber_Incident_Response.pdf' }
    ],
    time: 'approximately 2 hours to write an initial plan.'
  },
  1: {
    acknowledgement: 'There is a rough idea of what would happen in an incident. Writing it down makes it usable. The person who holds the plan in their head may not be the one who has to respond.',
    whyDocument: null,
    writtenRecord: [
      'A one-page document covering: how to recognise an incident, who to contact, how to contain it, how to recover',
      'IT support or broadband provider contact included',
      'Stored somewhere findable without using the affected device'
    ],
    resources: [
      { label: 'NCSC Ireland — incident response', url: 'www.ncsc.gov.ie/pdfs/Cyber_Incident_Response.pdf' }
    ],
    time: 'approximately 1 hour to formalise what you already have in mind.'
  },
  2: {
    confirmation: 'Your incident plan is in place and written down.',
    nextStep: 'Review the plan once a year and after any incident — even a minor one. Contact details change and new systems mean the steps may need updating.'
  }
};

REMEDIATIONS['Q5.1'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'Without regular backups, a ransomware attack, hardware failure, or accidental deletion could destroy the files your business runs on. GDPR Article 32(1)(c) requires you to be able to restore your data. It is also a core requirement under NIS2 Article 21(2)(c) for in-scope businesses.',
    whyLegal: null,
    steps: [
      'Step 1: Identify the files and data your business cannot operate without — customer records, financial data, contracts, correspondence. These are what need to be backed up.',
      'Step 2: Choose a backup method. For most small businesses, a cloud service such as Google Drive, Microsoft OneDrive, or iCloud is free up to a storage limit and backs up automatically. Turn on automatic backup now.',
      'Step 3: Set a reminder to check once a month that the backup is still running — most cloud services show you the time of the last backup in their settings.'
    ],
    resources: [
      { label: 'NCSC UK — backing up your data', url: 'www.ncsc.gov.uk/collection/small-business-guide' },
      { label: 'ENISA — cybersecurity guide for SMEs', url: 'www.enisa.europa.eu/publications/cybersecurity-guide-for-smes' }
    ],
    time: 'approximately 1–2 hours to set up automatic cloud backup.'
  },
  1: {
    whyDocumentLabel: 'What to do first',
    writtenRecordLabel: 'Action steps',
    acknowledgement: 'Some backup practice is in place. Irregular backups mean unpredictable data loss. The gap between the last backup and today is data that could be gone forever. Automatic backup removes the need to remember.',
    whyDocument: null,
    writtenRecord: [
      'Turn on automatic backup through your cloud service — Google Drive, Microsoft OneDrive, or iCloud all do this for free up to a storage limit',
      'Set a monthly reminder to check the backup is still running',
      'Note what is covered by the backup, how often it runs, and where it is stored'
    ],
    time: 'approximately 1 hour.'
  },
  2: {
    confirmation: 'Important business files are backed up automatically at least once a week.',
    nextStep: 'Consider whether your backup frequency matches how your business actually works — if you work with customer data every day, a weekly backup means you could still lose up to a week of work. Daily automatic backup costs nothing extra with most cloud services.'
  }
};

REMEDIATIONS['Q5.2'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'A backup on the same device offers no protection if that device is stolen, damaged, or hit by ransomware. You lose your files and your backup at the same time. Storing backups separately is a resilience requirement under GDPR Article 32(1)(c) and NIS2 Article 21(2)(c).',
    whyLegal: null,
    steps: [
      'Step 1: Check where your current backup is stored. If it is on the same device or on a drive kept next to the same device, it is not adequately separated.',
      'Step 2: Choose a separate location. Cloud storage — Google Drive, Microsoft OneDrive, iCloud — is the simplest option and is free up to a storage limit. If you use a physical backup drive, store it somewhere different from your main devices — at home if your main device is at the office, or vice versa.',
      'Step 3: Update your backup process so that the separate location is used going forward. Write a note of where the backup is stored.'
    ],
    resources: [
      { label: 'NCSC UK — backing up your data', url: 'www.ncsc.gov.uk/collection/small-business-guide' }
    ],
    time: 'approximately 1 hour to move existing backups and confirm the new location.'
  },
  1: {
    whyDocumentLabel: 'What to do first',
    writtenRecordLabel: 'Action steps',
    acknowledgement: 'Some separation is in place, but backups that remain on the same network can still be reached by ransomware in the same incident that destroys the main files. Completing the separation closes that gap entirely.',
    whyDocument: null,
    writtenRecord: [
      'Identify which backups are not yet fully separated — drives that stay plugged in or cloud services that are always syncing count as connected',
      'Move or add those copies to a consistently separate location — an offline drive stored away from your main devices, or a second cloud service',
      'Note where all backup copies are stored and confirm none remain permanently connected to the same network as your main devices'
    ],
    time: 'approximately 1 hour.'
  },
  2: {
    confirmation: 'All backups are stored consistently separately from your main devices and network.',
    nextStep: 'Make sure at least one other person in your business knows how to access the backup — you may not be available in an emergency.'
  }
};

REMEDIATIONS['Q5.3'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'A backup that has never been tested may not work when it is needed. Corrupted transfers, wrong settings, or changed file formats can all make it useless. There is no visible warning. The ENISA SME guide flags restore testing as the most commonly skipped but critical resilience step.',
    whyLegal: null,
    steps: [
      'Step 1: Choose a file from your backup — a document or spreadsheet — and restore it to a different location on your device. This can be done through your cloud backup settings under "restore" or "recover."',
      'Step 2: Open the restored file and confirm it is complete and readable.',
      'Step 3: Write down the date you did this and whether it was successful. Set a reminder to repeat it every three to six months.'
    ],
    resources: [
      { label: 'NCSC UK — backing up and recovering', url: 'www.ncsc.gov.uk/collection/small-business-guide' }
    ],
    time: 'approximately 30 minutes.'
  },
  1: {
    whyDocumentLabel: 'What to do first',
    writtenRecordLabel: 'Action steps',
    acknowledgement: 'Backups are in place — testing them is the one step that confirms they’ll actually work when needed. Thirty minutes now means no doubt later.',
    whyDocument: null,
    writtenRecord: [
      'Choose one file from your backup and restore it to a different location on your device through your cloud backup settings under "restore" or "recover"',
      'Open the restored file and confirm it is complete and readable',
      'Note the date, what you restored, and that it was successful — then set a reminder to repeat every three to six months'
    ],
    time: 'approximately 30 minutes.'
  },
  2: {
    confirmation: 'Your backups have been tested and the result is documented.',
    nextStep: 'Check whether your backup service encrypts your data — meaning it is scrambled so only you can read it. Most reputable cloud backup services do this by default, but it is worth confirming in their settings or documentation. If a backup drive is ever lost or stolen, encryption means the data on it cannot be read by anyone who finds it.'
  }
};

REMEDIATIONS['Q5.4'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'If you do not know how long it would take to restore your business data, you cannot plan for disruption. You may have made the wrong decisions about how often to back up without realising it. The ENISA SME guide and the CIS Controls both list recovery time estimation as a basic resilience step.',
    whyLegal: null,
    steps: [
      'Step 1: Think through a realistic scenario — your main work computer is stolen or fails completely. How long would it take to get a replacement device and restore everything from your backup?',
      'Step 2: Write down an honest estimate and note any gaps — data that is not currently backed up, or software licences that would need to be tracked down and reactivated.',
      'Step 3: Use this estimate to spot anything that needs to change. For example, backing up more often. Or keeping software licence details somewhere you can find them.'
    ],
    resources: [
      { label: 'ENISA — cybersecurity guide for SMEs', url: 'www.enisa.europa.eu/publications/cybersecurity-guide-for-smes' }
    ],
    time: 'approximately 1 hour to think through and document.'
  },
  1: {
    acknowledgement: 'There is a rough sense of how long recovery would take. Working through it properly and writing it down turns that into something you can rely on, not just assume.',
    whyDocument: null,
    writtenRecord: [
      'A written estimate of recovery time for your most important data',
      'A note of anything not currently covered by your backup',
      'Actions identified to close any gaps'
    ],
    time: 'approximately 30 minutes.'
  },
  2: {
    confirmation: 'Your recovery time is known and documented.',
    nextStep: 'Review this estimate whenever your business changes significantly. New systems, more data, or more staff all affect how long recovery would take.'
  }
};

REMEDIATIONS['Q6.1'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'Default router passwords are publicly listed and are the first thing any attacker tries. Leaving one in place gives anyone nearby access to your entire network. Changing default passwords is a specific Cyber Essentials requirement. It is also an appropriate technical measure under GDPR Article 32.',
    whyLegal: null,
    steps: [
      'Step 1: Find your broadband router. On the back or base you will find the default username and password printed on a label. Note these down — you will need them for Step 2.',
      'Step 2: Open a browser on a device connected to the router and type the router’s IP address into the address bar. This is usually 192.168.0.1 or 192.168.1.1 and is also printed on the router. Log in using the default credentials.',
      'Step 3: Go to the admin or security settings and change the password to something unique — at least 12 characters. Write the new password down and store it somewhere safe, not on the router itself.'
    ],
    resources: [
      { label: 'NCSC UK — securing your router', url: 'www.ncsc.gov.uk/collection/small-business-guide' }
    ],
    time: 'approximately 30 minutes.'
  },
  1: {
    whyDocumentLabel: 'What to do first',
    writtenRecordLabel: 'Action steps',
    acknowledgement: 'Many businesses aren’t sure whether the router password has been changed — if the default is still in place, the network has a well-known, easily exploited weakness. Checking takes under 30 minutes.',
    whyDocument: null,
    writtenRecord: [
      'Log into your router settings using the default credentials printed on the router — if those credentials no longer work, the password has already been changed',
      'If the default is still in place, change it to something unique with at least 12 characters',
      'Write the new password down somewhere safe — not on the router itself — and note the date it was changed'
    ],
    time: 'approximately 30 minutes.'
  },
  2: {
    confirmation: 'The router password has been changed from the factory default.',
    nextStep: 'Check whether your router’s built-in software updates automatically. Most modern routers do. It is worth confirming in the router settings.'
  }
};

REMEDIATIONS['Q6.2'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'Visitors on the same network as your work devices can see or interfere with business data. This can happen by accident or through a compromised device. Separating guest WiFi is a Cyber Essentials control. It is also consistent with the network security measures expected under GDPR Article 32.',
    whyLegal: null,
    steps: [
      'Step 1: Log into your router settings (see Q6.1 for how to access these) and look for a "Guest network" or "Guest WiFi" option. Most modern routers include this feature at no extra cost.',
      'Step 2: Turn on the guest network and give it a different name and password from your main work network. Make sure the option that prevents guest devices seeing your main network is turned on — this is usually called "client isolation" or "AP isolation."',
      'Step 3: Share the guest network name and password with visitors from now on. Write a note confirming the separation is in place and when it was set up.'
    ],
    resources: [
      { label: 'NCSC UK — WiFi security', url: 'www.ncsc.gov.uk/collection/small-business-guide' }
    ],
    time: 'approximately 30 minutes.'
  },
  1: {
    whyDocumentLabel: 'What to do first',
    writtenRecordLabel: 'Action steps',
    acknowledgement: 'The visitor WiFi is believed to be separate — but unless the settings have been confirmed in the router, it’s not certain. Checking takes under 30 minutes and removes any doubt.',
    whyDocument: null,
    writtenRecord: [
      'Log into your router settings and confirm the guest network is enabled with client isolation or AP isolation turned on — this prevents guest devices from seeing your main network',
      'Confirm the guest network has a different name and password from your work network',
      'Write a note confirming this has been checked, including the date and that isolation is enabled'
    ],
    time: 'approximately 30 minutes.'
  },
  2: {
    confirmation: 'Visitor WiFi is separate from your work network and the settings have been confirmed.',
    nextStep: 'Check the guest network settings when your router is updated or replaced. These settings sometimes reset to factory defaults during a firmware update.'
  }
};

REMEDIATIONS['Q6.3'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'Work done over public WiFi can be viewed by others on the same network. Passwords, emails, and customer data can be exposed without anyone knowing. Using secure connections for remote access is an appropriate technical measure under GDPR Article 32. It is also addressed in the Cyber Essentials scheme.',
    whyLegal: null,
    steps: [
      'Step 1: For most small businesses, the simplest protection is to access work through cloud-based tools — Microsoft 365, Google Workspace, and similar services use encrypted connections by default. Confirm your team uses these through the browser or official app rather than through an unprotected local connection.',
      'Step 2: If staff need to connect directly to your office systems from outside, speak to your IT support or broadband provider about using a VPN — a tool that creates a secure connection. Many business broadband and cloud packages include this.',
      'Step 3: Write a simple rule for your business — for example "when working from a public location, only access work systems through our cloud tools or VPN, not through unprotected public WiFi."'
    ],
    resources: [
      { label: 'NCSC UK — working from home securely', url: 'www.ncsc.gov.uk/collection/home-working' }
    ],
    time: 'approximately 1 hour to establish the rule and confirm cloud tools are configured correctly.'
  },
  1: {
    acknowledgement: 'Secure tools are used for remote work. Writing this down as a rule means staff know what is expected. They do not have to judge for themselves what is acceptable on any given day.',
    whyDocument: null,
    writtenRecord: [
      'A written rule for remote working — which tools to use and how to connect',
      'Whether a VPN is required and how to access it',
      'Who is responsible for making sure the rule is followed'
    ],
    time: 'approximately 30 minutes.'
  },
  2: {
    confirmation: 'Remote access uses secure connections and the rule is written down.',
    nextStep: 'Remind staff of the remote working rule at least once a year. Habits drift. Public WiFi is convenient, and the risk is invisible.'
  }
};

REMEDIATIONS['Q6.4'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'A personal device used for work that gets lost, stolen, or infected puts business data at risk. Personal devices are less likely to have the same security settings as business ones. Managing the security of devices used for business data is an appropriate technical measure under GDPR Article 32.',
    whyLegal: null,
    steps: [
      'Step 1: Decide which personal devices are allowed for work use. Decide what security requirements they must meet. Examples are a screen lock, up-to-date software, and antivirus if it is a laptop.',
      'Step 2: Write these expectations down in a brief, plain-language note — one page is enough. This is not a formal document, just a clear expectation in writing.',
      'Step 3: Share the note with all staff who use personal devices for work. Keep a copy somewhere accessible and revisit it if your business adopts new tools or a new person joins.'
    ],
    resources: [
      { label: 'NCSC UK — bring your own device', url: 'www.ncsc.gov.uk/collection/device-security-guidance' }
    ],
    time: 'approximately 1 hour to write and share the rules.'
  },
  1: {
    acknowledgement: 'There are informal expectations, but unspoken rules are easy to misread. This is especially true for new staff who do not know what was previously agreed.',
    whyDocument: null,
    writtenRecord: [
      'A written note of what personal devices can be used for work',
      'What security requirements apply — screen lock, updates, antivirus',
      'Who is responsible for making sure these expectations are met'
    ],
    time: 'approximately 30 minutes.'
  },
  2: {
    confirmation: 'Rules for personal devices are in place and written down.',
    nextStep: 'Review the rules every year. Revisit them whenever your business adopts a significant new tool. New software often creates new ways to access work data from personal devices.'
  }
};

REMEDIATIONS['Q7.1'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'Fake emails are the most common way attackers get into business systems. Staff who have never been told what to look for are far more likely to click a harmful link or hand over a password. GDPR Article 32(4) requires appropriate security awareness for staff. It is also a foundational measure in the CIS Controls and the ENISA SME guide.',
    whyLegal: null,
    steps: [
      'Step 1: Hold a short briefing with your team — even 20 minutes. Cover the three most common warning signs: unexpected urgency, a sender address that does not match the organisation it claims to be from, and a link or attachment that was not expected.',
      'Step 2: Give staff a clear rule for what to do — for example "if you are not sure about an email or message, do not click anything. Contact [named person] or delete it."',
      'Step 3: Write down that the briefing happened, when it took place, and who attended. This is your evidence that awareness training was provided.'
    ],
    resources: [
      { label: 'NCSC Ireland — spotting phishing', url: 'www.ncsc.gov.ie/smallbusiness' },
      { label: 'NCSC UK — phishing', url: 'www.ncsc.gov.uk/collection/phishing-scams' }
    ],
    time: 'approximately 1 hour to prepare and deliver the briefing.'
  },
  1: {
    acknowledgement: 'Staff have received awareness training. Keep a written record of when it happened and what was covered. That way each briefing builds on the last instead of starting from scratch.',
    whyDocument: null,
    writtenRecord: [
      'A note of when the briefing took place and who attended',
      'The key points covered — what to look for, what to do',
      'A plan for when it will next be repeated'
    ],
    time: 'approximately 30 minutes.'
  },
  2: {
    confirmation: 'Staff have been briefed and the training is documented.',
    nextStep: 'Use a real example when you next brief your team. It could be a recent suspicious email or a publicly reported scam targeting Irish businesses. Real examples are far more memorable than general advice.'
  }
};

REMEDIATIONS['Q7.2'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'A staff member who spots something suspicious but does not know who to tell will often say nothing. This is not because they are careless. It is because they are not sure it is serious enough to raise. Making this clear is part of the organisational measures expected under GDPR Article 32(4).',
    whyLegal: null,
    steps: [
      'Step 1: Decide who in your business is the first point of contact for a security concern — this should be the same person named in Q4.3. Write down their name and how to contact them, including a phone number in case email is not working.',
      'Step 2: Tell all staff who this person is and what to do — for example "if you think something is wrong with your device, your account, or you have received a suspicious message, contact [name] straight away — even if you are not sure."',
      'Step 3: Display this information somewhere all staff can see it — a shared folder, a team communication channel, or a notice in a shared workspace.'
    ],
    resources: [
      { label: 'NCSC Ireland — incident reporting', url: 'www.ncsc.gov.ie/smallbusiness' }
    ],
    time: 'approximately 30 minutes.'
  },
  1: {
    acknowledgement: 'In practice, most staff probably know who to contact — but probably isn’t good enough in a real incident, and someone who joined recently may have no idea at all. Writing it down and displaying it means it’s not just held by the people who were there when it was discussed.',
    whyDocument: null,
    writtenRecord: [
      'The name and contact details of the person to report security concerns to',
      'Where this information is displayed so all staff can find it without searching'
    ],
    time: 'approximately 15 minutes.'
  },
  2: {
    confirmation: 'Staff know who to contact and this is written down and accessible.',
    nextStep: 'Remind staff of this contact at least once a year — people forget, new staff may not have been told, and the responsible person may have changed.'
  }
};

REMEDIATIONS['Q7.3'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'New staff are the most likely to make a security mistake. This is not because they are careless. They do not yet know your systems, your expectations, or the risks specific to your business. GDPR Article 32(4) specifically requires security guidance for new starters.',
    whyLegal: null,
    steps: [
      'Step 1: Write a short security briefing for new starters — one page is enough. Cover: how to keep their login secure, what to do with a suspicious email or message, who to contact if something goes wrong, and any rules about personal devices or remote working that apply to your business.',
      'Step 2: Add this briefing to whatever process you already use for new starters — even if that is just a first-day conversation. The important thing is that it happens every time, not just occasionally.',
      'Step 3: Keep a note of who has received the briefing and when. A line in a spreadsheet or a note in a shared folder is enough.'
    ],
    resources: [
      { label: 'NCSC Ireland — staff awareness', url: 'www.ncsc.gov.ie/smallbusiness' }
    ],
    time: 'approximately 1–2 hours to write the briefing; approximately 30 minutes per new starter thereafter.'
  },
  1: {
    acknowledgement: 'New starters receive guidance when they join. Writing it down makes the guidance consistent, no matter who delivers it on the day.',
    whyDocument: null,
    writtenRecord: [
      'A written one-page briefing for new starters covering the key security expectations',
      'A record of who has received it and when'
    ],
    time: 'approximately 1 hour to formalise what you already do.'
  },
  2: {
    confirmation: 'New staff receive a written security briefing and this is documented.',
    nextStep: 'Review the briefing once a year — your tools, systems, and rules change, and the briefing should reflect what is actually in place today.'
  }
};

REMEDIATIONS['Q7.4'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'Threats change. Staff change. A business that has not talked about security for over a year is working from outdated awareness. Regular security conversation is part of the organisational measures expected under GDPR Article 32(4). It is also one of the lowest-cost controls there is.',
    whyLegal: null,
    steps: [
      'Step 1: Schedule a 20-minute security conversation with your team — it does not need to be a formal training session. Cover what has changed in the past year, any incidents or near-misses your business has experienced, and any new tools or ways of working that bring new risks.',
      'Step 2: Use a recent example to make it concrete — a suspicious email your business received, or a publicly known scam currently targeting businesses in Ireland. Abstract warnings are far less effective than real examples.',
      'Step 3: Write down that the conversation happened, when, and who attended. Set a reminder for the same time next year.'
    ],
    resources: [
      { label: 'ENISA — cybersecurity guide for SMEs', url: 'www.enisa.europa.eu/publications/cybersecurity-guide-for-smes' }
    ],
    time: 'approximately 1 hour to prepare and deliver.'
  },
  1: {
    acknowledgement: 'A security conversation has happened this year. Keep a note of when and what was covered. That turns it from a one-off into an annual habit with a baseline to build on.',
    whyDocument: null,
    writtenRecord: [
      'A note of the date, who attended, and the main topics covered',
      'A calendar reminder set for next year'
    ],
    time: 'approximately 15 minutes.'
  },
  2: {
    confirmation: 'Security conversations with staff happen regularly and are written down.',
    nextStep: 'Vary the format occasionally. A short quiz, an example from a recent incident, or a news story all work. This keeps the conversation engaging rather than routine.'
  }
};

REMEDIATIONS['Q8.1'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'If you do not know which outside companies handle personal data on your behalf, you cannot check that they are doing so securely. Under GDPR Article 28, you remain the data controller. You stay accountable for that data, even when someone else holds it.',
    whyLegal: null,
    steps: [
      'Step 1: Make a list of every outside company or service that handles personal data on your behalf. Think broadly — payroll providers, cloud accounting software, email marketing tools, booking systems, IT support companies, website hosts, and cloud storage services all count.',
      'Step 2: For each one, note what personal data they have access to — for example "payroll provider: staff names, bank account details, tax numbers."',
      'Step 3: Keep this list alongside your Record of Processing Activities from Q3.3 and update it whenever you start or stop using an outside service.'
    ],
    resources: [
      { label: 'Data Protection Commission — guidance on data processors', url: 'www.dataprotection.ie/en/organisations/know-your-obligations/data-processors' }
    ],
    time: 'approximately 1–2 hours to create the initial list.'
  },
  1: {
    acknowledgement: 'You have a rough picture of which outside companies handle personal data. Writing it down formally makes every next step manageable. That includes checking agreements and reviewing access.',
    whyDocument: null,
    writtenRecord: [
      'A list of outside companies with access to personal data and what data they can see',
      'Kept alongside your data processing record from Q3.3'
    ],
    time: 'approximately 1 hour.'
  },
  2: {
    confirmation: 'Outside companies that handle personal data are listed and written down.',
    nextStep: 'Review the list once a year — it is easy to add a new tool or service without thinking through its data access implications at the time.'
  }
};

REMEDIATIONS['Q8.2'] = {
  0: {
    legalAlert: 'GDPR Article 28 requires a written contract to be in place with any company that processes personal data on your behalf. This applies regardless of the size of your business and regardless of the size of the provider. It includes cloud software companies, IT support providers, payroll services, and any other company with access to your customers’ or staff’s personal data.',
    whatThisMeans: 'Without a written agreement, there’s no contractual protection and no way to hold an outside company accountable for what happens to your data. GDPR Article 28 requires these agreements to be in place, and the DPC has cited their absence in enforcement decisions.',
    whyLegal: null,
    steps: [
      'Step 1: Use your list from Q8.1 to identify every outside company that handles personal data for your business. For each one, check whether a written agreement is already in place.',
      'Step 2: For large providers such as Google, Microsoft, or Xero, a data processing agreement is usually embedded in their terms of service — check their privacy or legal pages to confirm this. Many have a specific agreement document you can download or accept online.',
      'Step 3: For smaller providers or local IT support companies, request a written agreement directly. The DPC website sets out what it must include. Keep copies of all agreements in a single dedicated folder.'
    ],
    resources: [
      { label: 'Data Protection Commission — data processor agreements', url: 'www.dataprotection.ie/en/organisations/know-your-obligations/data-processors' }
    ],
    time: 'approximately 2–3 hours to check and collect existing agreements; additional time to receive agreements from smaller providers.'
  },
  1: {
    whyDocumentLabel: 'What to do first',
    writtenRecordLabel: 'Action steps',
    acknowledgement: 'Agreements may already exist — particularly with large providers like Google, Microsoft, or Xero, where they’re often embedded in the terms of service. Until those have been located and stored in one place, compliance can’t be demonstrated if the DPC asks to see them.',
    whyDocument: null,
    writtenRecord: [
      'Work through your supplier list from Q8.1 and check each provider’s privacy or legal pages for a data processing agreement — most large providers have one available to download or accept online',
      'For any provider where you cannot find one, contact them directly and request it in writing',
      'Store confirmed copies in a single folder and note any that are still outstanding with a target date to resolve them'
    ],
    resources: [
      { label: 'Data Protection Commission — data processor agreements', url: 'www.dataprotection.ie/en/organisations/know-your-obligations/data-processors' }
    ],
    time: 'approximately 2 hours to check and collect.'
  },
  2: {
    confirmation: 'Written agreements are in place with all data processors and stored in one accessible location.',
    nextStep: 'Check agreements when you switch providers. Also check when a provider updates their terms. Data processing arrangements can change, and the written agreement needs to match the current setup.'
  }
};

REMEDIATIONS['Q8.3'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'An outside company with poor security that holds your data is your problem. You chose to use them and remain responsible under GDPR Article 28. Basic security checks before sharing personal data with a third party are expected of any data controller.',
    whyLegal: null,
    steps: [
      'Step 1: Before using any new outside company or service that will have access to personal data, spend 15 minutes checking their security position. Look for three things. A clear privacy policy that explains how they handle data. Whether they hold a security certification such as ISO 27001 or Cyber Essentials. How they describe their data security measures in their documentation.',
      'Step 2: If the provider is small or local — for example a local IT contractor or bookkeeper — ask them directly: "What do you do to keep our data secure?" A provider who cannot give a clear answer is a risk worth noting before committing to use them.',
      'Step 3: Write a brief note of what you checked and what you found for each provider. Keep this alongside your supplier list from Q8.1.'
    ],
    resources: [
      { label: 'Data Protection Commission — choosing processors', url: 'www.dataprotection.ie/en/organisations/know-your-obligations/data-processors' }
    ],
    time: 'approximately 30 minutes per provider.'
  },
  1: {
    acknowledgement: 'Supplier security is considered when choosing new providers. Without a consistent process and a written record, you cannot show that due diligence later if something goes wrong.',
    whyDocument: null,
    writtenRecord: [
      'A brief note for each provider of what was checked and what was found',
      'Keep this alongside your supplier list'
    ],
    time: 'approximately 30 minutes to document assessments you have already made.'
  },
  2: {
    confirmation: 'Security is checked before using outside companies and the checks are documented.',
    nextStep: 'Repeat the check from time to time for providers you have used for a long time. Security practices change. A provider that was adequate two years ago may not be today.'
  }
};

REMEDIATIONS['Q2.5'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'A payment device that’s also used for email or browsing can pick up harmful software through ordinary web use, which can then reach the systems handling card data. Keeping payment devices isolated is a recognised Cyber Essentials control.',
    whyLegal: null,
    steps: [
      'Step 1: Identify the device or terminal your business uses to take card payments. Check whether that same device is also used for email, browsing, or other everyday work. If it is, stop using it for those tasks from now on.',
      'Step 2: If a dedicated payment device is not already in place, speak to your payment provider about whether a standalone card terminal is available. Most providers offer low-cost or no-cost terminals that handle payments independently of your other devices.',
      'Step 3: Write a simple rule for your business — the payment device is used for payments only. Note this alongside your other device records.'
    ],
    resources: [
      { label: 'NCSC UK — securing devices', url: 'www.ncsc.gov.uk/collection/small-business-guide' }
    ],
    time: 'approximately 30 minutes to establish the rule; additional time if a new terminal needs to be arranged.'
  },
  1: {
    acknowledgement: 'The payment device is kept separate, which significantly reduces the risk. Writing it down as a rule is what ensures someone else managing the device in future follows the same approach.',
    whyDocument: null,
    writtenRecord: [
      'A note that the payment device is used for payments only and not for general business tasks',
      'Who is responsible for making sure this rule is followed',
      'Keep this alongside your other device records'
    ],
    time: 'approximately 15 minutes.'
  },
  2: {
    confirmation: 'Your payment device is kept separate from everyday use and this is written down.',
    nextStep: 'When your payment terminal or device is replaced or updated, check the separation rule still applies. Do this before the new device is put into use.'
  }
};

REMEDIATIONS['Q3.5'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'If card numbers pass through your own server rather than going straight to a payment provider, your business is handling some of the most sensitive personal data there is. Under GDPR, storing card details when you do not need to breaks the data minimisation principle. A recognised payment provider removes this exposure almost entirely.',
    whyLegal: null,
    steps: [
      'Step 1: Check how your website currently handles card payments. Log into your website’s payment or checkout settings and identify whether card numbers pass through your own server or are handled entirely by an external provider such as Stripe, PayPal, or Square.',
      'Step 2: If card data touches your server at any point, contact your web developer or hosting provider and ask them to switch to a hosted payment page or embedded payment form provided directly by a recognised payment provider. This is a standard configuration that most providers support at no extra cost.',
      'Step 3: Once a recognised provider is in place, confirm in writing that your business does not store card numbers — note this in your Record of Processing Activities from Q3.3.'
    ],
    resources: [
      { label: 'Data Protection Commission — guidance for SMEs', url: 'www.dataprotection.ie/en/dpc-guidance/guidance-for-smes' }
    ],
    time: 'approximately 2–3 hours including contacting your web developer or payment provider; the technical change may take additional time depending on your setup.'
  },
  1: {
    whyDocumentLabel: 'What to do first',
    writtenRecordLabel: 'Action steps',
    acknowledgement: 'Using a payment provider is the right approach. The uncertainty about whether card numbers touch your server is worth resolving. A brief check with your web developer takes under 30 minutes. The answer directly affects your GDPR position.',
    whyDocument: null,
    writtenRecord: [
      'Ask your web developer or hosting provider directly: "Do card numbers pass through our server at any point, or does the payment provider handle them entirely?" — request written confirmation',
      'If card data does touch your server, ask them to switch to a hosted payment form provided by your payment provider — this is standard and usually free',
      'Once confirmed, add a note to your Record of Processing Activities from Q3.3 stating that card payments are handled by your provider and card numbers are not stored'
    ],
    time: 'approximately 30 minutes to confirm; additional time if a technical change is needed.'
  },
  2: {
    confirmation: 'Online card payments go through a recognised provider and your business does not store card details.',
    nextStep: 'When you change payment provider or update your website, check the new setup. Card data should still go through the provider’s systems, not your own server. This can change without notice during a website update.'
  }
};

REMEDIATIONS['Q4.5'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'A plan that has never been walked through may not work when it is actually needed. The gaps only become visible when you practice. Testing incident response is a recognised organisational measure under GDPR Article 32. It is also a specific NIS2 requirement for in-scope entities.',
    whyLegal: null,
    steps: [
      'Step 1: Set aside 30 minutes with whoever is named in your incident plan — the owner, the incident lead from Q4.3, and any relevant staff. Talk through what would happen in one realistic scenario — for example, a ransomware attack that locks all your files on a Monday morning. Who does what, in what order?',
      'Step 2: As you walk through the scenario, note anything that does not work as expected — a contact number that is out of date, a backup that nobody knows how to access, a decision that has no clear owner. Fix each gap before the next walkthrough.',
      'Step 3: Write down that the walkthrough happened, when it took place, who was involved, and what gaps were identified and resolved. Set a reminder to repeat it once a year.'
    ],
    resources: [
      { label: 'NCSC Ireland — incident response', url: 'www.ncsc.gov.ie/pdfs/Cyber_Incident_Response.pdf' }
    ],
    time: 'approximately 1 hour for the walkthrough and notes.'
  },
  1: {
    acknowledgement: 'The plan has been tested, which makes it something the team can actually follow. Writing down when it happened and what gaps were found is what makes each test build on the last.',
    whyDocument: null,
    writtenRecord: [
      'A note of when the walkthrough took place and who was involved',
      'Any gaps identified and whether they were resolved',
      'When the next test is planned'
    ],
    time: 'approximately 30 minutes.'
  },
  2: {
    confirmation: 'Your incident response plan has been tested and the result is documented.',
    nextStep: 'After any real incident — even a minor one — review the plan against what actually happened. Real incidents reveal gaps that walkthroughs do not always catch.'
  }
};

REMEDIATIONS['Q5.5'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'Ransomware specifically targets connected backups. If all your copies are reachable from the same network, a single attack can destroy your files and every backup at once. A backup that can be wiped out in the same incident as the original data does not meet GDPR Article 32(1)(c) or NIS2 Article 21(2)(c).',
    whyLegal: null,
    steps: [
      'Step 1: Check whether all your current backups are permanently connected to your network or devices — this includes cloud backup services that are always signed in and syncing, and external drives that stay plugged in. If everything is connected all the time, none of it is adequately protected against ransomware.',
      'Step 2: Create at least one copy of your most critical business data on a physical drive that is disconnected from your devices when not in use. Update this copy regularly — weekly is sufficient for most small businesses — and store the drive somewhere separate from your main devices when not updating it.',
      'Step 3: Write a note of what your offline copy contains, how often it is updated, where it is stored, and who is responsible for updating it.'
    ],
    resources: [
      { label: 'NCSC UK — backing up your data', url: 'www.ncsc.gov.uk/collection/small-business-guide' }
    ],
    time: 'approximately 1–2 hours to set up the offline copy and document the process.'
  },
  1: {
    acknowledgement: 'An offline copy is in place, but without a regular update schedule it could be significantly out of date when it’s actually needed. Writing down the schedule and who maintains it is what keeps it reliable.',
    whyDocument: null,
    writtenRecord: [
      'A note of what the offline copy contains and how often it is updated',
      'Where the drive is stored when not being updated',
      'Who is responsible for maintaining it'
    ],
    time: 'approximately 30 minutes.'
  },
  2: {
    confirmation: 'Your offline backup copy is in place and updated on a regular schedule.',
    nextStep: 'Test that you can restore from the offline copy at least once. Confirm a file can be retrieved from it before you need it in an emergency.'
  }
};

REMEDIATIONS['Q7.5'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'A card number written on a notepad, saved in a spreadsheet, or typed into an email can be found by anyone with access to that document. Under GDPR, storing card numbers after you have processed the payment breaks the data minimisation principle. Payment card industry rules ban it entirely.',
    whyLegal: null,
    steps: [
      'Step 1: Decide on a clear rule for phone payments. Card details are entered straight into your payment terminal or payment software during the call. They are never written down or saved anywhere at any point.',
      'Step 2: If your current process involves writing numbers down before entering them, stop straight away. Change the process so the customer reads their number directly into the payment system during the call.',
      'Step 3: Write the rule down and make sure everyone who handles phone payments knows it and has confirmed they understand it.'
    ],
    resources: [
      { label: 'Data Protection Commission — guidance for SMEs', url: 'www.dataprotection.ie/en/dpc-guidance/guidance-for-smes' }
    ],
    time: 'approximately 30 minutes to establish and communicate the rule.'
  },
  1: {
    acknowledgement: 'Card numbers are processed straight away and not stored. Write that down as a rule. It keeps the practice in place when someone new handles a phone payment for the first time.',
    whyDocument: null,
    writtenRecord: [
      'A written rule that card numbers are entered directly during the call and never written down or saved',
      'Confirmation that everyone who handles phone payments has been told this rule',
      'Keep this alongside your other data handling records'
    ],
    time: 'approximately 30 minutes.'
  },
  2: {
    confirmation: 'Your phone payment process ensures card numbers are never stored and this rule is written down.',
    nextStep: 'If your business changes how it handles phone payments, confirm the same rule still applies. That covers new staff, new software, or a new provider. Do this before the new process goes live.'
  }
};

REMEDIATIONS['Q8.4'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'An IT contractor or software provider with more access than they need creates unnecessary risk. If their account is breached, an attacker can reach everything that account can see. Limiting outside access to the minimum needed is part of the data minimisation principle and GDPR Article 32 security measures.',
    whyLegal: null,
    steps: [
      'Step 1: Go through your supplier list from Q8.1. For each outside company or contractor, think about what they actually need access to in order to do their work — and whether their current access is broader than that.',
      'Step 2: Adjust access settings where access is wider than needed. Most cloud services allow you to share only specific folders, data sets, or functions rather than granting full account access.',
      'Step 3: Write a rule that access is reviewed at the end of every engagement — when a project is complete or a contract ends, access is removed. Write down who is responsible for this.'
    ],
    resources: [
      { label: 'Data Protection Commission — data processor guidance', url: 'www.dataprotection.ie/en/organisations/know-your-obligations/data-processors' },
      { label: 'NCSC Ireland — supply chain security', url: 'www.ncsc.gov.ie/smallbusiness' }
    ],
    time: 'approximately 1–2 hours to review and adjust current access settings.'
  },
  1: {
    acknowledgement: 'Access is being kept limited, but without a formal review there’s no way to be certain every account is as narrow as it should be. Writing down the decisions means they can be checked over time and acted on quickly when an engagement ends.',
    whyDocument: null,
    writtenRecord: [
      'A note of which outside companies have access to which systems',
      'A rule that access is removed at the end of each engagement',
      'Who is responsible for making this happen'
    ],
    time: 'approximately 1 hour.'
  },
  2: {
    confirmation: 'External access is limited and documented.',
    nextStep: 'Carry out a quick access review every six months. Access tends to build up over time. Old permissions can stay active long after they are needed.'
  }
};

REMEDIATIONS['Q2.6'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'A lost or stolen laptop without encryption is an open book — anyone who finds it can read every file, email, and document without needing a password. Under GDPR Article 32, a device with personal data going missing unencrypted is a probable reportable breach. The cost of not encrypting is far higher than the five minutes it takes to turn it on.',
    whyLegal: null,
    steps: [
      'Step 1: On Windows laptops, search for "BitLocker" in the Start menu — if it is available, turn it on. On Macs, go to System Settings, search for FileVault, and turn it on. Both are free and already built in.',
      'Step 2: On work phones, confirm that a PIN, password, or biometric lock is set. Most modern phones encrypt data automatically once a screen lock is enabled.',
      'Step 3: Work through every laptop and portable device used for work, confirm encryption is on, and note this alongside your device inventory from Q2.4.'
    ],
    resources: [
      { label: 'NCSC UK — device encryption', url: 'www.ncsc.gov.uk/collection/small-business-guide' }
    ],
    time: 'approximately 30 minutes to check and enable across all devices.',
    amber: {
      appendSteps: [
        'Step 4 (NIS2 entities only): Write a one-line policy for your business — for example: "All laptops and portable storage devices used for work must have full-disk encryption enabled before use." This is what NIS2 Article 21(2)(h) requires in addition to having encryption turned on.'
      ]
    }
  },
  1: {
    whyDocumentLabel: 'What to do first',
    writtenRecordLabel: 'Action steps',
    acknowledgement: 'Encryption is on some devices — covering the rest closes the gap. The ones that haven’t been checked are the highest risk.',
    whyDocument: null,
    writtenRecord: [
      'Check each laptop and portable work device and enable BitLocker (Windows) or FileVault (Mac) on any not yet encrypted — under 10 minutes per device',
      'Note which devices now have encryption enabled and add this to your device inventory from Q2.4'
    ],
    time: 'approximately 10 minutes per device.'
  },
  2: {
    confirmation: 'All laptops and portable work devices have full-disk encryption enabled.',
    nextStep: 'Check that any new device added to your business has encryption turned on before it goes into use. It is easy to set up a new laptop quickly and miss this step.',
    amber: {
      confirmation: 'All laptops and portable devices are encrypted and you have a written encryption policy.'
    }
  }
};

REMEDIATIONS['Q4.6'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'Without a written risk assessment, security decisions are based on instinct rather than analysis. You may be putting effort into low-risk areas while real risks go unaddressed. Under NIS2 Article 21(2)(a), the assessment is also the evidence that your measures are proportionate. Without it, you cannot show compliance with any of the other Article 21 duties.',
    whyLegal: null,
    steps: [
      'Step 1: List the things your business most depends on — customer data, financial records, email, key software, payment systems. These are your assets. Note which ones would cause the most harm if they were unavailable, corrupted, or accessed by the wrong person.',
      'Step 2: For each asset, identify the most realistic threat — ransomware, a phishing email compromising an account, a lost device, a supplier breach. Note roughly how likely each scenario is and how damaging it would be.',
      'Step 3: Note what you currently have in place for each threat, and whether any gaps remain. This completed document is your risk assessment. It does not need to be long — one page covering your key assets is sufficient to start. Date it and schedule a review in twelve months.'
    ],
    resources: [
      { label: 'ENISA — cybersecurity guide for SMEs', url: 'www.enisa.europa.eu/publications/cybersecurity-guide-for-smes' }
    ],
    time: 'approximately 2–3 hours for an initial assessment.'
  },
  1: {
    acknowledgement: 'The risks have been thought through. Writing them down turns that into a documented position you can show. Under NIS2 Article 21(2)(a), informal awareness is not enough. The assessment has to exist as a document that can be reviewed, updated, and shown to NCSC Ireland if asked.',
    whyDocument: null,
    writtenRecord: [
      'A list of your key business assets — data, systems, and processes you depend on',
      'For each asset: the main threat, a rough likelihood and impact assessment, and what you currently have in place to address it',
      'The date the assessment was completed and when it will next be reviewed'
    ],
    time: 'approximately 1–2 hours to formalise what you already know.'
  },
  2: {
    confirmation: 'Your business has a written cybersecurity risk assessment. It covers your key assets, main threats, and current mitigations.',
    nextStep: 'Review the assessment every year. Also review it whenever your business changes significantly. New systems, new staff, new services, or a serious incident all affect your risk profile.'
  }
};

REMEDIATIONS['Q4.7'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'If senior leaders have never reviewed your security measures, those measures can be quietly dropped when other priorities take over. Without written sign-off, there is no evidence your business took NIS2 seriously. Article 20 makes this a governance duty, not a technical one. The person running the business is expected to understand the risks and approve how they are handled.',
    whyLegal: null,
    steps: [
      'Step 1: Set aside one hour for the most senior person to review the findings from this assessment — the main gaps, the priority actions, and what is needed to address them.',
      'Step 2: Write a brief note — one paragraph is enough — confirming that the most senior person has reviewed the security position and agreed on the priorities. Date it and keep it with your other security records.',
      'Step 3: Set a calendar reminder for this review to happen at least once a year. As NIS2 is enacted in Irish law, this documented review will be part of your compliance evidence if NCSC Ireland requests it.'
    ],
    resources: [
      { label: 'NCSC Ireland — NIS2 guidance', url: 'www.ncsc.gov.ie/nis2' }
    ],
    time: 'approximately 1 hour for the initial review and documented sign-off.'
  },
  1: {
    acknowledgement: 'The most senior person is aware of the security situation. But NIS2 Article 20 requires evidence of a formal review, not just awareness. A brief written record of what was reviewed and agreed is what sets awareness apart from governance. NCSC Ireland will look for this in any compliance inquiry.',
    whyDocument: null,
    writtenRecord: [
      'A brief written note confirming the most senior person has reviewed your security position and agreed on priority actions',
      'The date of the review',
      'A reminder set for the next annual review'
    ],
    time: 'approximately 30 minutes.'
  },
  2: {
    confirmation: 'The most senior person in your business has formally reviewed your security position and this is documented.',
    nextStep: 'Repeat this review every year and after any serious incident. The NIS2 governance duty is ongoing, not a one-off.'
  }
};

REMEDIATIONS['Q2.1'][0].amber = {
  whyLegal: 'NIS2 Article 21(2)(e) requires policies on security in the acquisition, development, and maintenance of systems. This includes vulnerability handling. An unpatched vulnerability can trigger a notifiable incident under Art.23 if it is exploited and causes significant service disruption.',
  appendSteps: [
    'Step 4 (NIS2 entities only): Subscribe to free vulnerability alerts for software your business uses — NCSC Ireland publishes advisories at www.ncsc.gov.ie and the NCSC UK has a similar service. Write a simple rule for how quickly critical patches should be applied — for example "critical security patches are applied within 48 hours of release."'
  ]
};

REMEDIATIONS['Q4.2'][0].amber = {
  legalAlert: 'GDPR requires you to report certain data breaches to the Data Protection Commission within 72 hours of becoming aware of them (Article 33). In serious cases — where a breach poses a high risk to the people whose data was affected — you must also notify those individuals directly (Article 34). NIS2 Article 23 adds a parallel obligation for in-scope businesses like yours: significant cybersecurity incidents must be reported to NCSC Ireland with an early warning within 24 hours of becoming aware, a full notification within 72 hours, and a final report within one month. The 24-hour NIS2 deadline runs faster than the GDPR 72-hour deadline, and a single incident can trigger both regimes.',
  whatThisMeans: 'Without processes covering both DPC and NCSC Ireland, your business faces dual compliance failures if an incident occurs. The 24-hour NIS2 early warning deadline to NCSC Ireland runs faster than the 72-hour GDPR DPC deadline.',
  whyLegal: 'GDPR Art.33 and NIS2 Art.23 impose concurrent but distinct notification duties. Personal data breaches go to the DPC. Significant cybersecurity incidents affecting service availability, data integrity, or system confidentiality go to NCSC Ireland. Many serious incidents trigger both. Missing either deadline is an enforcement risk under separate regulatory regimes.',
  prependSteps: [
    'Step 0 (NIS2 entities only): Register with NCSC Ireland’s incident reporting portal at www.ncsc.gov.ie and familiarise yourself with what counts as a significant incident under NIS2 — this is broader than personal data breaches and includes incidents affecting your ability to deliver services even when no personal data is involved.'
  ],
  appendSteps: [
    'Step 4 (NIS2 entities only): Update your incident decision process to ask two questions: Does this involve personal data? (→ DPC). Does this significantly affect your systems or services? (→ NCSC Ireland). Note that the answer to both can be yes.'
  ]
};
REMEDIATIONS['Q4.2'][1].amber = {
  acknowledgement: 'You have a DPC notification process in place — the NIS2 Art.23 obligation to NCSC Ireland runs in parallel and needs its own process alongside it.'
};

REMEDIATIONS['Q4.4'][0].amber = {
  whyLegal: 'NIS2 Article 21(2)(b) requires documented procedures covering prevention, detection, analysis, containment, recovery, and post-incident review. Without this, your business cannot meet the 24-hour NIS2 early warning deadline. You also cannot show NCSC Ireland that you have adequate incident handling capability.',
  appendSteps: [
    'Step 4 (NIS2 entities only): Add a decision tree to your plan: for each incident scenario, does it involve personal data? → DPC notification process. Does it significantly affect your systems or services? → NCSC Ireland notification process. Both can apply simultaneously. The NCSC Ireland guidance on what constitutes a significant incident is available at www.ncsc.gov.ie/nis2.'
  ]
};

REMEDIATIONS['Q5.4'][0].amber = {
  whyLegal: 'NIS2 Article 21(2)(c) requires documented business continuity measures. For in-scope entities, undefined recovery times mean undefined service disruption — which can itself trigger an Art.23 incident notification if systems are unavailable for a significant period. NCSC Ireland will expect you to have tested and documented these figures.'
};
REMEDIATIONS['Q5.4'][1].amber = {
  acknowledgement: 'You have a rough sense of your recovery capability. For NIS2 Article 21(2)(c), you need a documented and tested RTO and RPO. An informal estimate is not enough.'
};
REMEDIATIONS['Q5.4'][2].amber = {
  confirmation: 'Your business has Recovery Time Objectives and Recovery Point Objectives for its critical systems. These have been written down and tested.'
};

REMEDIATIONS['Q8.3'][0].amber = {
  whyLegal: 'NIS2 Article 21(2)(d) requires assessment of direct suppliers’ and service providers’ overall security practices — not just whether they have a privacy policy. For NIS2 entities, a compromised supplier is a supply chain security risk as well as a data protection risk, and NCSC Ireland expects you to have assessed this.',
  appendSteps: [
    'Step 4 (NIS2 entities only): For key suppliers, ask directly: Do they have a documented incident response process? Can they provide evidence of security certification such as ISO 27001 or Cyber Essentials? What is their process for notifying customers if their systems are compromised? Document the answers alongside your supplier list from Q8.1. For NIS2, this documented assessment is part of your Art.21(2)(d) compliance evidence.'
  ]
};

REMEDIATIONS['Q6.5'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'A firewall left at factory defaults can expose your network to the internet. So can old port-forwarding rules nobody remembers adding. Services that should only be reachable from inside the business may end up open to outsiders. Blocking unneeded inbound connections is one of the five core technical controls under Cyber Essentials. It is also listed as an appropriate technical measure under GDPR Article 32.',
    whyLegal: null,
    steps: [
      'Step 1: Log into your broadband router (see Q6.1 for how) and find the firewall, security, or port-forwarding section. Confirm that no inbound port-forwarding rules are configured unless you actively need them — if you do not recognise a rule, remove it.',
      'Step 2: Confirm the router’s firewall is enabled. The setting is usually labelled "firewall", "SPI firewall", or "block unsolicited inbound traffic" — most routers have it on by default but it is worth verifying.',
      'Step 3: Note that the firewall is configured and active alongside your other device records from Q6.1. If your business uses a separate hardware firewall or a cloud-managed network, ask your IT support to confirm the same configuration on that side.'
    ],
    resources: [
      { label: 'NCSC UK — small business guide (firewalls and internet gateways)', url: 'www.ncsc.gov.uk/collection/small-business-guide' }
    ],
    time: 'approximately 30 minutes.'
  },
  1: {
    whyDocumentLabel: 'What to do first',
    writtenRecordLabel: 'Action steps',
    acknowledgement: 'A firewall is in place — the gap is whether it is configured to block what it should. A firewall left at factory defaults can quietly pass connections you did not intend to allow, particularly if a previous installer opened ports that were never closed.',
    whyDocument: null,
    writtenRecord: [
      'Log into your router or firewall and review any port-forwarding or open-port rules — remove anything you do not recognise or no longer need',
      'Confirm the firewall itself is enabled (sometimes called "SPI firewall" or "block unsolicited inbound")',
      'Note the configuration alongside your other device records and check it again the next time you replace or reconfigure the router'
    ],
    time: 'approximately 30 minutes.'
  },
  2: {
    confirmation: 'Your firewall is actively configured to block unneeded inbound connections.',
    nextStep: 'Review firewall rules every year. Also review them whenever you add a new service that needs internet access. Temporary rules tend to outlast their purpose.'
  }
};

REMEDIATIONS['Q3.6'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'Without a privacy notice, the people whose data you hold have no idea what your business collects or what it is used for. You also have no way to show that you informed them. The DPC publishes complaint statistics every year. Privacy notice failures are consistently among the most-cited issues, including against small businesses.',
    whyLegal: null,
    steps: [
      'Step 1: Use the DPC’s free SME privacy notice template as a starting point. It covers everything Articles 13 and 14 require, in plain language. It is designed to be filled in rather than rewritten.',
      'Step 2: Fill in the template with your business specifics. What data you collect, such as names, emails, payment info, or CV details. Why you collect it. Who you share it with, such as your payment provider, accountant, or IT support. How long you keep it. How someone can request access or deletion.',
      'Step 3: Make the notice visible at the moment of collection: link it from your website footer, your contact form, your booking page, and any printed forms. Display it on the wall if you collect data in person. Update it when your processing activities change.'
    ],
    resources: [
      { label: 'Data Protection Commission — right to be informed', url: 'www.dataprotection.ie/en/individuals/know-your-rights/right-be-informed' }
    ],
    time: 'approximately 2–3 hours for an initial notice.'
  },
  1: {
    whyDocumentLabel: 'What to do first',
    writtenRecordLabel: 'Action steps',
    acknowledgement: 'A privacy notice exists. Closing the remaining gaps turns it into a compliant disclosure. The gaps usually involve completeness, being up to date, and being visible at the point of collection.',
    whyDocument: null,
    writtenRecord: [
      'Compare your existing notice against the DPC’s template. Fill any gaps. Pay particular attention to third-party recipients, retention periods, and the rights summary',
      'Make sure the notice is visible to people at the moment their data is collected — linked from the form they are filling in or the page they are booking through, not buried three clicks deep',
      'Note the date of the latest revision on the notice itself and set a reminder to review it annually or when your processing activities change'
    ],
    resources: [
      { label: 'Data Protection Commission — right to be informed', url: 'www.dataprotection.ie/en/individuals/know-your-rights/right-be-informed' }
    ],
    time: 'approximately 1–2 hours.'
  },
  2: {
    confirmation: 'Your business has a written privacy notice that is complete, current, and visible at the point of data collection.',
    nextStep: 'Review the privacy notice every year. Update it sooner if you add a new processing activity, like a new payment provider, newsletter, or HR system. Each of these usually involves new data or new sharing.'
  }
};

REMEDIATIONS['Q3.7'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'An unanswered request to see or delete personal data is one of the most common ways small businesses come to the DPC’s attention. The one-month deadline starts the moment the request arrives. It does not start when you decide it is serious. A request also does not have to mention GDPR or subject access to count.',
    whyLegal: null,
    steps: [
      'Step 1: Decide who in your business handles these requests — typically the same person named as the incident lead in Q4.3. Note their name and contact details.',
      'Step 2: Write a simple one-page process: how to recognise a subject access or erasure request ("can I see what you have on me?" counts), what to do when one arrives (acknowledge in writing, log the date, gather the data, send within one month), and the narrow circumstances when erasure can be refused (covered in DPC guidance).',
      'Step 3: Save the process with your other data records. Tell anyone who handles customer or staff communications that these requests must be passed to the named person straight away.'
    ],
    resources: [
      { label: 'Data Protection Commission — guidance on data subject rights', url: 'www.dataprotection.ie/en/individuals/know-your-rights' }
    ],
    time: 'approximately 2 hours.'
  },
  1: {
    whyDocumentLabel: 'What to do first',
    writtenRecordLabel: 'Action steps',
    acknowledgement: 'The obligation is understood — but under a one-month deadline, awareness alone leaves a lot of room for fumbling. The clock starts when the request lands, not when you decide what to do about it.',
    whyDocument: null,
    writtenRecord: [
      'Name the person who will handle these requests (typically the incident lead from Q4.3) and write down their contact details',
      'Write a one-page process covering: how to recognise a request, how to acknowledge it in writing the same day, how to gather the data, and the one-month deadline',
      'Tell whoever opens email or answers the phone that any "can I see / delete what you have on me?" query must go to the named person straight away'
    ],
    resources: [
      { label: 'Data Protection Commission — guidance on data subject rights', url: 'www.dataprotection.ie/en/individuals/know-your-rights' }
    ],
    time: 'approximately 1 hour.'
  },
  2: {
    confirmation: 'Your business has a written process for handling subject access and erasure requests, with a named person responsible.',
    nextStep: 'Walk through the process with the named person once a year. The one-month clock is unforgiving. A stale process is much the same as no process when a request arrives.'
  }
};

REMEDIATIONS['Q4.8'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'Article 33(5) is a separate duty from the 72-hour DPC notification. Every personal data incident has to be logged internally, even if it did not need to be reported externally. Examples include a misdirected email, a lost USB stick, or a contractor seeing the wrong file. The DPC can ask to see the register during an inquiry. An empty or missing register is itself a compliance failure.',
    whyLegal: null,
    steps: [
      'Step 1: Set up a simple register — a spreadsheet, a document, or a section in your existing data records is enough. Columns: date, what happened, what personal data was involved, how many people were affected, what was done to contain it, whether it was reported to the DPC, and any follow-up needed.',
      'Step 2: Decide who maintains the register (typically the incident lead from Q4.3) and where it lives — somewhere accessible internally but not exposed externally. Note its location alongside your other data records.',
      'Step 3: Add an entry for every personal data incident going forward, however minor. Set a calendar reminder to review the register annually for patterns — repeated minor incidents in one area often signal a process or training issue that is cheaper to fix than to keep responding to.'
    ],
    resources: [
      { label: 'Data Protection Commission — breach notification (covers internal recording)', url: 'www.dataprotection.ie/en/organisations/know-your-obligations/breach-notification' }
    ],
    time: 'approximately 1 hour to set up.'
  },
  1: {
    whyDocumentLabel: 'What to do first',
    writtenRecordLabel: 'Action steps',
    acknowledgement: 'Notes on past incidents exist — turning them into a structured register that captures every incident (not just the reported ones) is what brings you in line with Article 33(5). The DPC expects a complete record, not a curated one.',
    whyDocument: null,
    writtenRecord: [
      'Convert your existing notes into a simple register — date, what happened, data involved, people affected, action taken, whether reported to the DPC',
      'Backfill any incidents you remember from the last twelve months that did not make it into the existing notes — minor ones count too',
      'Set a rule that every personal data incident from now on goes in the register, however minor, and decide who maintains it'
    ],
    resources: [
      { label: 'Data Protection Commission — breach notification (covers internal recording)', url: 'www.dataprotection.ie/en/organisations/know-your-obligations/breach-notification' }
    ],
    time: 'approximately 1 hour.'
  },
  2: {
    confirmation: 'Your business keeps a written breach register covering every personal data incident, in line with Article 33(5).',
    nextStep: 'Review the register every year for patterns. Repeated minor incidents in one area often signal a process gap. Examples are misdirected emails or lost devices. Fixing the gap is cheaper than handling the same issue again and again.'
  }
};

REMEDIATIONS['Q6.6'] = {
  0: {
    legalAlert: null,
    whatThisMeans: 'A weak or widely-shared WiFi password means anyone who has ever known it can still reach your work network from the car park. That includes a former employee, a past contractor, or a regular visitor. WiFi access controls fall under the Firewalls and Internet Gateways control in Cyber Essentials. They are also an appropriate technical measure under GDPR Article 32.',
    whyLegal: null,
    steps: [
      'Step 1: Change the business WiFi password to a strong unique passphrase — three or four random words is fine and is what NCSC UK recommends. Avoid anything based on the business name or address.',
      'Step 2: Tell only the people who currently need it (current staff, current contractors). Put the new password in your password manager rather than on a sticky note or whiteboard.',
      'Step 3: Set a rule that the password is changed when staff or regular visitors change — at minimum, when a person who knew it leaves the business. Note the rule alongside your other network records.'
    ],
    resources: [
      { label: 'NCSC UK — small business guide (Wi-Fi)', url: 'www.ncsc.gov.uk/collection/small-business-guide' }
    ],
    time: 'approximately 30 minutes.'
  },
  1: {
    whyDocumentLabel: 'What to do first',
    writtenRecordLabel: 'Action steps',
    acknowledgement: 'A WiFi password is in place — but old passwords accumulate access over time. Changing it once and reviewing who currently knows it closes the gap.',
    whyDocument: null,
    writtenRecord: [
      'Change the WiFi password to a strong unique passphrase and list the people who currently need to know it',
      'Note the new password in your password manager and remove any sticky notes, whiteboards, or shared documents that displayed the old one',
      'Set a rule for re-changing the password when someone leaves or a regular visitor relationship ends'
    ],
    time: 'approximately 30 minutes.'
  },
  2: {
    confirmation: 'Your business WiFi password is strong and access is reviewed when staff or regulars change.',
    nextStep: 'Change the WiFi password every year, regardless of staff changes. Long-lived passwords drift into wider knowledge over time.'
  }
};
