const pageHeader = document.querySelector('.Heading.c__page-header');
const onRegistrationPage = pageHeader && pageHeader.innerText === "Patient Registration";

const defaults = {
  reorder: 'prepend',
}
const fields = {
  // Identity
  LASTNAME: { header: true },
  FIRSTNAME: {},
  DOB: {},
  PREFERREDNAME: { rarelyUsed: true },
  MIDDLEINITIAL: { rarelyUsed: true },
  PREVIOUSLASTNAME: { rarelyUsed: true },
  SSN: { rarelyUsed: true },

  // Contact
  ADDRESS1: { header: true },
  ADDRESS2: {},
  ZIP: {},
  CITY: {},
  STATE_text: {},
  HOMEPHONE: {},
  MOBILEPHONE: {},
  CONSENTTOTEXTRADIO: {},
  EMAIL: {},
  CONTACTPREFERENCE: {},
  WORKPHONE: { rarelyUsed: true },

  // Demographic
  SEXUALORIENTATION: { header: true },
  SEX: {},
  GENDERIDENTITY: {},

  MARITALSTATUSID: {},
  SCHOOLBASED: {},
  HOMELESS: {},
  VETERANSTATUS: {},
  PUBLICHOUSING: {},
  REFERRALSOURCEID: {},
  REFERRALSOURCEOTHER: {},

  /**
   * These break when moved. Leave them in place
  PRIMARYLANGUAGEID: {},
  RACEID: { ignore: true },
  ETHNICITYID: { ignore: true },
  UNCONFIRMEDFAMILYSIZE: { ignore: true },
  UNCONFIRMEDINCOMEPERPAYPERIOD: { ignore: true },
  */
  
  /**
   * These appear to be hidden. Leave them be.
  REGISTRATIONDATE: {},
  GUARDIANLASTNAME: {},
  GUARDIANFIRSTNAME: {},
  GUARDIANMIDDLEINITIAL: {},
  CONTACTNAME: {},
  CONTACTRELATIONSHIP: {},
  CONTACTPHONE1: {},
  CONTACTPHONE2: {},
  NEXTKINNAME: {},
  NEXTKINRELATIONSHIP: {},
  NEXTKINPHONE: {},
  EMPLOYERID: {},
  EMPLOYERPHONE: {},
  OCCUPATIONID: {},
  INDUSTRYID: {},
  RELATIONSHIPTOPATIENTID: {},
  RPLASTNAME: {},
  RPFIRSTNAME: {},
  RPMIDDLEINITIAL: {},
  RPDOB: {},
  RPADDRESS: {},
  RPADDRESS2: {},
  RPZIP: {},
  RPCITY: {},
  RPSTATE_text: {},
  RPSSN: {},
  RPPHONE: {},
  RPEMAIL: {},
  RPEMPLOYERID: {},
  SUBMITVALUE: {},
  */

  /**
   * Move the following to the bottom. 
   * They will appear in reverse order
   */

  // Other side
  CLIENTRECORDNUMBER22: { reorder: 'append', header: true },

  // Administrative
  CARESUMMARYDELIVERYPREFERENCE: { reorder: 'append' },
  CURRENTDEPARTMENTID: { reorder: 'append' },
  REGISTRATIONDEPARTMENTID: { reorder: 'append' },
  PRIMARYPROVIDERID:  { header: true, reorder: 'append' },

  // More demographics
  HOMEBOUNDYN: { rarelyUsed: true, reorder: 'append' },
  AGRIWORKER: { rarelyUsed: true, reorder: 'append' },
  DECEASEDDATE: { rarelyUsed: true, reorder: 'append' },
  IDOVERRIDE: { rarelyUsed: true, reorder: 'append' },

  PRIVACYNOTICEGIVENFLAG: { reorder: false, checked: true },
  PATIENTSIGNATUREONFILEFLAG: { reorder: false, checked: true },
  INSUREDSIGNATUREONFILEFLAG: { reorder: false, checked: true },
  CONSENTTOCALLFLAG: { reorder: false, checked: true },
}

function initRegistrationPage() {
  const rows = document.querySelectorAll('.formelement');
  const parent = rows[0].closest('tbody');

  Object.entries(fields).reverse().forEach(([name, spec]) => {
    const fieldEl = document.querySelector(`[name=${name}]`);
    if (!fieldEl) { return; }
    const row = fieldEl.closest('.formelement');
    const parent = fieldEl.closest('tbody');
    decorateRow(parent, row, fieldEl);
  });
};

function decorateRow(parent, row, fieldEl) {
  const fieldSpec = {
    ...defaults,
    ...fields[fieldEl.getAttribute('name')]
  };

  if (fieldSpec.reorder) {
    parent[fieldSpec.reorder](row);
  }

  if (fieldSpec.rarelyUsed) {
    row.classList.add('bfc-registration-row--rarely-used');
  }

  if (fieldSpec.header) {
    row.classList.add(`bfc-registration-row--header`);
  }

  if (fieldSpec.default) {
    fieldEl.value = fieldSpec.default;
  }

  if (fieldSpec.checked !== undefined) {
    console.log('checking', fieldEl)
    fieldEl.checked = fieldSpec.checked;
  }
}

if (onRegistrationPage) {
  console.log('You\'re on the registration page');
  initRegistrationPage();
} else {
  console.log('You\'re not on the registration page');
}
