const pageHeader = document.querySelector('.Heading.c__page-header');
const onRegistrationPage = pageHeader && pageHeader.innerText === "Patient Registration";

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
  SEX: { header: true },
  GENDERIDENTITY: {},
  SEXUALORIENTATION: {},
  MARITALSTATUSID: {},
  
  HOMELESS: {},
  SCHOOLBASED: {},
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
  CLIENTRECORDNUMBER22: { append: true, header: true },

  // Administrative
  CARESUMMARYDELIVERYPREFERENCE: { append: true },
  CURRENTDEPARTMENTID: { append: true },
  REGISTRATIONDEPARTMENTID: { append: true },
  PRIMARYPROVIDERID:  { default: 154, header: true, append: true },

  // More demographics
  HOMEBOUNDYN: { rarelyUsed: true, append: true },
  AGRIWORKER: { rarelyUsed: true, append: true },
  DECEASEDDATE: { rarelyUsed: true, append: true },
  IDOVERRIDE: { rarelyUsed: true, append: true },  
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
  const fieldSpec = fields[fieldEl.getAttribute('name')];

  if (fieldSpec.append) {
    parent.append(row);
  } else {
    parent.prepend(row);
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
}

if (onRegistrationPage) {
  console.log('You\'re on the registration page');
  initRegistrationPage();
} else {
  console.log('You\'re not on the registration page');
}
