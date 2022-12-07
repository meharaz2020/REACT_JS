const allcountiesload = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displaycountry(data))
}
const displaycountry = (countries) => {
    const allcountriesHTML = countries.map(country => getcountry(country));
    // console.log(allcountriesHTML);
    const loadcountry = document.getElementById('loadcountry');
    loadcountry.innerHTML = allcountriesHTML.join(' ');
}
const getcountry = (country) => {
    return `
      <div>
      <h2>${country.name.common}</h2>
      <img style="width:200px;height:100px" src=${country.flags.png}>
      </div>
      `
}
allcountiesload();