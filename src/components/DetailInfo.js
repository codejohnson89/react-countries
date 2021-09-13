import React from 'react';




const DetailInfo = (props) => {
    const {name, population, region, subRegion, capital, topLevelDomain, currencies, languages, borders} = props;
    return (
        <div className="detail-info">
        <h1>{name}</h1>
        <div className="content">
        <div className="top-content">
           <div className="left">
            <p className="population">Population: {population}</p>
            <p className="region">Region: {region}</p>
            <p className="subRegion">Subregion: {subRegion}</p>
            <p className="capital">Capital: {capital}</p>
           </div>
           <div className="right">
               <p className="topLevelDomain">Top Level Domain: {topLevelDomain}</p>
               <p className="currency">Currencies: {currencies.map((currency) => {
            return <span key={currency.name}>{currency.name}</span>;
                })}</p>
                <p className="languages">Languages:         {languages.map((lang) => {
            return <span key={lang.name}>{lang.name}</span>
        })}</p>
           </div>
           </div>
        <div className="bottom">
            Border Countries: <div className="border-container">{borders.map((border) => {
                return <div className="border">{border}</div>
            })}</div>
        </div>
           
        </div>
        </div>
    )
}


export default DetailInfo;