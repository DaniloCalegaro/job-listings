//console.log('-------')

/*----Received Json----*/
const pathJson = './src/json/data.json'

fetch(pathJson)
  .then(response => {
    return response.json()
  })
  .then(jsondata => receivedJsonData(jsondata))

/*----Create element----*/
function newElement(name, className, type) {
  name = document.createElement(type)
  if (className != '') {
    name.className = className
  }
  return name
}

function receivedJsonData(jsonData) {
  /*----Insert Dynamic---- */
  const pageMain = document.querySelector('main')

  jsonData.forEach(element => {
    divContainer = newElement('container', 'container', 'section')

    //Company
    divCompany = newElement('company', 'company', 'div')

    divImageCompany = newElement('imageCompany', 'image-company', 'div')
    imgCompany = newElement('imgCompany', '', 'img')
    imgCompany.src = element.logo

    divImageCompany.appendChild(imgCompany)
    divCompany.appendChild(divImageCompany)

    divDetailsCompany = newElement(
      'divDetailsCompany',
      'details-company',
      'div'
    )
    divCompanyNameFeature = newElement(
      'divCompanyNameFeature',
      'company-name-feature',
      'div'
    )
    listCompanyNameFeature = newElement('listCompanyNameFeature', '', 'ul')
    rowCompany = newElement('rowCompany', '', 'li')
    companyName = newElement('companyName', '', 'p')
    companyName.textContent = element.company
    rowNew = newElement('rowNew', '', 'li')
    companyNew = newElement('companyNew', 'button-new', 'p')
    companyNew.textContent = element.new
    rowFeatured = newElement('rowFeatured', '', 'li')
    companyFeatured = newElement('companyFeatured', 'button-featured', 'p')
    companyFeatured.textContent = element.featured

    rowCompany.appendChild(companyName)
    listCompanyNameFeature.appendChild(rowCompany)

    rowNew.appendChild(companyNew)
    listCompanyNameFeature.appendChild(rowNew)

    rowFeatured.appendChild(companyFeatured)
    listCompanyNameFeature.appendChild(rowFeatured)

    divCompanyNameFeature.appendChild(listCompanyNameFeature)

    divJob = newElement('divJob', 'job', 'div')
    positionJob = newElement('positionJob', '', 'p')
    positionJob.textContent = element.position

    divJob.appendChild(positionJob)

    divDetailsJob = newElement('divDetailsJob', 'details-job', 'div')
    listDetailsJob = newElement('listDetailsJob', '', 'ul')

    rowPostedAt = newElement('rowPostedAt', '', 'li')
    postedAt = newElement('postedAt', '', 'p')
    postedAt.textContent = element.postedAt
    rowPostedAt.appendChild(postedAt)

    rowContract = newElement('rowContract', '', 'li')
    contractJob = newElement('contractJob', '', 'p')
    contractJob.textContent = element.contract
    rowContract.appendChild(contractJob)

    rowLocation = newElement('rowLocation', '', 'li')
    locationJob = newElement('locationJob', '', 'p')
    locationJob.textContent = element.location
    rowLocation.appendChild(locationJob)

    listDetailsJob.appendChild(rowPostedAt)
    listDetailsJob.appendChild(rowContract)
    listDetailsJob.appendChild(rowLocation)
    divDetailsJob.appendChild(listDetailsJob)

    divDetailsCompany.appendChild(divCompanyNameFeature)
    divDetailsCompany.appendChild(divJob)
    divDetailsCompany.appendChild(divDetailsJob)

    divCompany.appendChild(divDetailsCompany)
    //------

    //Filters
    divFilters = newElement('filters', 'filters', 'div')
    listFilters = newElement('.listFilters', '', 'ul')

    const rowListContract = newElement('rowListContract', '', 'li')
    const contract = newElement('contract', 'button-filters', 'a')
    contract.textContent = element.contract

    rowListContract.appendChild(contract)
    listFilters.appendChild(rowListContract)

    const rowListLocation = newElement('rowListLocation', '', 'li')
    const location = newElement('location', 'button-filters', 'a')
    location.textContent = element.location

    rowListLocation.appendChild(location)
    listFilters.appendChild(rowListLocation)

    element.languages.forEach(e => {
      const rowListLanguage = newElement('rowListLanguage', '', 'li')
      const language = newElement('language', 'button-filters', 'a')
      language.textContent = e

      rowListLanguage.appendChild(language)
      listFilters.appendChild(rowListLanguage)
    })

    divFilters.appendChild(listFilters)
    //--------

    divContainer.appendChild(divCompany)
    divContainer.appendChild(divFilters)
    pageMain.appendChild(divContainer)
  })
}

/*---- EventListeners ---- */

const filtersView = document.querySelector('#filters-view')
const modalFilters = document.querySelector('#modal-filters')
const closeModal = document.querySelector('#close-modal')
//console.log(modalFilters.classList.contains('active'))

filtersView.addEventListener('click', () => {
  modalFilters.classList.toggle('active')
})

modalFilters.addEventListener('click', () => {
  modalFilters.classList.toggle('active')
})
