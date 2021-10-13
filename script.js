let data = {
  fields: [
    {
      displayName: 'Contract Type',
      order: 5,
      tooltip:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
      type: 'dropdown',
      values: [
        {
          id: 0,
          value: 'None',
        },
        {
          id: 1,
          value: 'Service Agreements',
        },
        {
          id: 2,
          value: 'Advisory',
        },
        {
          id: 3,
          value: 'CDA',
        },
        {
          id: 4,
          value: 'Endorsement',
        },
        {
          id: 5,
          value: 'Quality',
        },
        {
          id: 6,
          value: 'Consultancy',
        },
        {
          id: 7,
          value: 'Lease',
        },
        {
          id: 8,
          value: 'Sales & Distribution',
        },
        {
          id: 9,
          value: 'Others',
        },
      ],
    },
    {
      displayName: 'Company Name',
      order: 1,
      tooltip:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
      type: 'text',
      required: true,
    },
    {
      displayName: 'Unit or Vertical',
      order: 2,
      tooltip:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
      type: 'text',
      required: true,
    },
    {
      displayName: 'Phone Number',
      order: 4,
      tooltip:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
      type: 'number',
      required: true,
    },
    {
      displayName: 'Email Address',
      order: 3,
      tooltip:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
      type: 'text',
      required: true,
    },
    {
      displayName: 'Contract Document',
      order: 7,
      tooltip:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
      type: 'document',
      required: true,
    },
    {
      displayName: 'Type of Document',
      order: 6,
      tooltip:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
      type: 'dropdown',
      values: [
        {
          id: 0,
          value: 'None',
        },
        {
          id: 1,
          value: 'Service Agreements',
        },
        {
          id: 2,
          value: 'Advisory',
        },
        {
          id: 3,
          value: 'CDA',
        },
        {
          id: 4,
          value: 'Endorsement',
        },
        {
          id: 5,
          value: 'Quality',
        },
        {
          id: 6,
          value: 'Consultancy',
        },
        {
          id: 7,
          value: 'Lease',
        },
        {
          id: 8,
          value: 'Sales & Distribution',
        },
        {
          id: 9,
          value: 'Others',
        },
      ],
    },
  ],
}

const container = document.querySelector(".container");
console.log(data.fields);
const p=data.fields.sort((a, b) =>a.order-b.order);
console.log(p);

const form = document.createElement('form');

for (let i = 0; i < p.length; i++)
{
  const div = document.createElement('div')
  div.classList = "div";
  const companyName = document.createElement('div');
  if (p[i].required == undefined) {
    companyName.innerText = p[i].displayName
  } else {
    console.log(p[i].required)
    companyName.innerText = `${p[i].displayName}${
      p[i].required == false ? null : " *"
    }`
  }
  companyName.className = "companyName";
  div.appendChild(companyName);

  
  if (p[i].type == 'dropdown') {
    const contractText = document.createElement('select')
    contractText.className = 'companyText'
    const contractOtions = p[4].values.map((ele, index) => {
      const createOption = document.createElement('option')
      createOption.innerText = ele.value
      createOption.id = index
      contractText.appendChild(createOption)
    })
    div.appendChild(contractText)
  }
  
  else if (p[i].type == 'document') {
    const companyText = document.createElement('input')
    companyText.placeholder = `Enter ${p[i].displayName} `
    companyText.type = 'file'
    companyText.className = 'companyText'
    companyText.id = 'docs'
    div.appendChild(companyText);
    companyText.required = p[i].required;


  }
  else if ((p[i].type == 'number')) {
    const companyText = document.createElement('input')
    companyText.placeholder = `Enter ${p[i].displayName} `
    companyText.type = p[i].type
    companyText.className = 'companyText'
    companyText.required = p[i].required;
    companyText.id = "mobileNumber";

    div.appendChild(companyText)
   const tooltiptext = document.createElement('span')
    tooltiptext.innerText = p[i].tooltip;
   tooltiptext.className = 'tooltiptext'
   div.appendChild(tooltiptext)
  
  }
  else if (p[i].type == 'text') {
    const companyText = document.createElement('input')
    companyText.placeholder = `Enter ${p[i].displayName} `
    companyText.type = 'text';
    companyText.className = 'companyText';
     if (p[i].displayName == 'Email Address') {
       companyText.id = 'requiredEmail'
       companyText.required = p[i].required;
    }
    if (p[i].displayName == 'Company Name') {
      companyText.id = 'requiredCompanyName';
      companyText.required = p[i].required;
    }
    if (p[i].displayName == 'Unit or Vertical') {
      companyText.id = 'requiredUnit';
      companyText.required = p[i].required;
    }
   
    div.appendChild(companyText)
       const tooltiptext = document.createElement('span')
       tooltiptext.innerText = p[i].tooltip
       tooltiptext.className = 'tooltiptext'
       div.appendChild(tooltiptext)
  
     
    
  }
 
  
  form.appendChild(div);
  
}

const button = document.createElement("button");
button.innerText = "Submit"
// button.type = "submit";
button.className = "button";
form.appendChild(button);

container.appendChild(form)

// ---------------------------------------------

function ValidateEmail(mail) {
  if (/^[A-Za-z0-9+_.-]+@(.+)$/.test(mail)) {
    return true
  } else {
    alert('You have entered an invalid email address!')
    return false
  }
}
function validationMobile(mobile) {
  console.log(mobile);
  if (/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(mobile)) {

    return true;
  }
  alert('You have entered an invalid mobile number!')
  return false
}
console.log(document.querySelector('form'))   

 const submit = document.querySelector(".button");
console.log(submit);
button.addEventListener("click", validation = (event) => {
  console.log("clicked");
  event.preventDefault();
  
  let companyName;
  let requiredUnit;
  let docs;
  for (let i = 0; i < p.length; i++) {
    companyName = document.querySelector('#requiredCompanyName').value.length != 0
    requiredUnit = document.querySelector('#requiredUnit').value.length != 0
      docs = document.querySelector('#docs').value != 0
  }
  console.log(companyName);
  const mail = ValidateEmail(document.querySelector('#requiredEmail').value);
  const mobileNum = validationMobile(document.querySelector("#mobileNumber").value);
  console.log(mail);
  if (companyName && requiredUnit && docs && mail && mobileNum) {
    document.querySelector('.container').style.display = 'none'
    document.querySelector('.submitted').style.display = 'block'
  }
  else {
    alert("please fill all the required fields");
 }

});

















  
// const companyName = document.createElement('span');
// companyName.innerText = p[0].displayName;
// companyName.className = "companyName";
// const companyText = document.createElement("input");
// companyText.placeholder = "Enter Company Name";
// companyText.type = "text";
// companyText.className = "companyText";
// companyName.appendChild(companyText);
// container.appendChild(companyName);
 
// const unitName = document.createElement('span')
// unitName.innerText = p[1].displayName
// unitName.className = 'companyName'
// const unitText = document.createElement('input')
// unitText.placeholder = 'Enter Unit or Vertical'
// unitText.type = 'text'
// unitText.className = 'companyText'
// unitName.appendChild(unitText)
// container.appendChild(unitName);

// const emailName = document.createElement('span')
// emailName.innerText = p[2].displayName
// emailName.className = 'companyName'
// const emailText = document.createElement('input')
// emailText.placeholder = 'Enter Email Address';
// emailText.type = 'text'
// emailText.className = 'companyText'
// emailName.appendChild(emailText)
// container.appendChild(emailName)

// const phoneName = document.createElement('span')
// phoneName.innerText = p[3].displayName
// phoneName.className = 'companyName'
// const phoneText = document.createElement('input')
// phoneText.placeholder = 'Enter Phone Number';
// phoneText.type = 'number'
// phoneText.className = 'companyText'
// phoneName.appendChild(phoneText);
// container.appendChild(phoneName);


// const contractName = document.createElement('span')
// contractName.innerText = p[4].displayName
// contractName.className = 'companyName'
// const contractText = document.createElement('select')

// contractText.className = 'companyText'
// const contractOtions = p[4].values.map((ele, index) => {
//   const createOption = document.createElement('option')
//   createOption.innerText = ele.value
//   createOption.id = index
//   contractText.appendChild(createOption)
// })
// contractName.appendChild(contractText)
// container.appendChild(contractName);




// const contractTypeName = document.createElement('span')
// contractTypeName.innerText = p[5].displayName
// contractTypeName.className = 'companyName'
// const contractTypeText = document.createElement('select')

// contractTypeText.className = 'companyText'
// const contractTypeOptions = p[4].values.map((ele, index) => {
//   const createOption = document.createElement('option')
//   createOption.innerText = ele.value
//   createOption.id = index
//   contractTypeText.appendChild(createOption)
// })
// contractTypeName.appendChild(contractTypeText)
// container.appendChild(contractTypeName);


// const phoneName = document.createElement('span')
// phoneName.innerText = p[3].displayName
// phoneName.className = 'companyName'
// const phoneText = document.createElement('input')
// phoneText.placeholder = 'Enter Phone Number'
// phoneText.type = 'number'
// phoneText.className = 'companyText'
// phoneName.appendChild(phoneText)
// container.appendChild(phoneName)