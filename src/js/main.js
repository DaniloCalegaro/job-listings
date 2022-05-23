/*----Arrays----*/
let languages = []
let filtersSelected = []

const pathJson = './src/json/data.json'

/*--- Fetch Json and Filter ---*/
function fetchJsonFiltering(arrayfilters) {
   fetch(pathJson)
      .then(response => {
         return response.json()
      })
      .then(jsondata => {
         searchFiltersAvailable(jsondata)

         function insideArray(value) {
            const searchItens = arrayfilters.every(filter =>
               value.languages.some(language => language === filter)
            )
            return searchItens
         }
         const jsonFilteringLanguage =
            arrayfilters === undefined ? jsondata : jsondata.filter(insideArray)
         mountPage(jsonFilteringLanguage)
      })
      .catch(error => console.log(error))
}

function mountPage(jsonData) {
   const pageMain = document.querySelector('main')
   const listDinamicModalFilters = document.querySelector(
      '#dinamic-modal-filters'
   )
   /*---Reset Page---*/
   pageMain.innerHTML = ''
   listDinamicModalFilters.innerHTML = ''

   /*---Insert Dynamic---*/

   //Results Json
   const spanResult = document.querySelector('#cont-result')
   spanResult.textContent = jsonData.length

   if (jsonData.length === 0) {
      divNoResults = newElement('divNoResults', 'job', 'div')
      textNoResult = newElement('textNoResult', '', 'p')
      textNoResult.textContent = 'Search Not Found'
      textNoResult.style.marginTop = '2rem'
      divNoResults.appendChild(textNoResult)
      pageMain.appendChild(divNoResults)
      //console.log('sem resultado')
   }

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
      rowCompany.appendChild(companyName)
      listCompanyNameFeature.appendChild(rowCompany)

      if (element.new) {
         rowNew = newElement('rowNew', '', 'li')
         companyNew = newElement('companyNew', 'button-new', 'p')
         companyNew.textContent = 'New!'

         rowNew.appendChild(companyNew)
         listCompanyNameFeature.appendChild(rowNew)
      }

      if (element.featured) {
         rowFeatured = newElement('rowFeatured', '', 'li')
         companyFeatured = newElement('companyFeatured', 'button-featured', 'p')
         companyFeatured.textContent = 'Featured'

         rowFeatured.appendChild(companyFeatured)
         listCompanyNameFeature.appendChild(rowFeatured)
      }

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

   /*----Filters Modal Dinamics---- */
   languages.forEach(element => {
      const rowLanguage = newElement('rowLanguage', '', 'li')
      rowLanguage.textContent = element
      listDinamicModalFilters.appendChild(rowLanguage)
   })

   /*--- Add more filters

  typeContracts.forEach(e => {
    const rowTypeContract = newElement('rowTypeContract', '', 'li')
    rowTypeContract.textContent = e
    listDinamicModalFilters.appendChild(rowTypeContract)
  })

  const rowDivider = newElement('rowDivider', 'list-break', 'li')
  listDinamicModalFilters.appendChild(rowDivider)

  locations.forEach(e => {
    const rowLocation = newElement('rowLocation', '', 'li')
    rowLocation.textContent = e
    listDinamicModalFilters.appendChild(rowLocation)
  })

  const rowDivider2 = newElement('rowDivider', 'list-break', 'li')
  listDinamicModalFilters.appendChild(rowDivider2)

  */
}

/*---- EventListeners Modal---- */

const filtersView = document.querySelector('#filters-view')
filtersView.addEventListener('click', () => {
   modalFilters.classList.toggle('active')
})

const modalFilters = document.querySelector('#modal-filters')
modalFilters.addEventListener('click', () => {
   modalFilters.classList.toggle('active')
})

/*--- EventListener Modal Add Button List Dinamic Filters Header ---*/
const listDinamicModalFilters = document.querySelector('#dinamic-modal-filters')
listDinamicModalFilters.addEventListener('click', e => {
   const listButtonsFiltersSelected = document.querySelector('#buttons-filters')
   const rowFilterSelected = newElement(
      'rowFilterSelected',
      'button-header-filter',
      'li'
   )
   const filterSelected = newElement('filterSelected', '', 'a')
   const valueElementClick = e.target.firstChild.textContent

   if (!checkRepeatedItem(valueElementClick, filtersSelected)) {
      filtersSelected.push(valueElementClick)
      filterSelected.textContent = e.target.firstChild.textContent
      rowFilterSelected.id = e.target.firstChild.textContent
      rowFilterSelected.appendChild(filterSelected)
      listButtonsFiltersSelected.appendChild(rowFilterSelected)

      // Filter Json and reload info
      fetchJsonFiltering(filtersSelected)
   }
})

/*--- EventListener Modal Remove Button List Dinamic Filters Header ---*/
const listbuttonFilterHeader = document.querySelector('#buttons-filters')
listbuttonFilterHeader.addEventListener('click', e => {
   const filterButton = document.getElementById(e.target.id)
   const valueButtonFilter = e.target.textContent
   if (filterButton != null) {
      filtersSelected = filtersSelected.filter(
         item => item != valueButtonFilter
      )
      document.getElementById(e.target.id).remove()

      // Filter Json and reload info
      fetchJsonFiltering(filtersSelected)
   }
})

/*--- Auxiliary functions ---*/

function newElement(name, className, type) {
   name = document.createElement(type)
   if (className != '') {
      name.className = className
   }
   return name
}

function searchFiltersAvailable(array) {
   array.forEach(element => {
      // Add contracts and locations array filters
      element.languages.forEach(language => {
         if (!checkRepeatedItem(language, languages)) languages.push(language)
      })
   })
}

const checkRepeatedItem = (element, array) => array.some(e => e === element)

/*--- Initialize page ---*/
window.onload = () => {
   fetchJsonFiltering()
}
