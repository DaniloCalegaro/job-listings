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
  name.className = className
  return name
}

/*----Insert Dynamic---- */
const pageMain = document.querySelector('main')

function receivedJsonData(jsonData) {
  //console.log(jsonData[0])
  jsonData.forEach(element => {
    container = newElement('container', 'container', 'div')

    company = newElement('company', 'company', 'div')

    filters = newElement('filters', 'filters', 'div')
    listFilters = newElement('listFilters', '', 'ul')

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

    filters.appendChild(listFilters)
    container.appendChild(company)
    container.appendChild(filters)
    pageMain.appendChild(container)
  })
}
