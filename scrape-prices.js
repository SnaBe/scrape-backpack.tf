//Our required modules
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
//Reuest from backpack.tf
request('https://backpack.tf/', function(err, response, html) {
  //Success
  if(!err && response.statusCode == 200) {
  	const $ = cheerio.load(html);
    //Loop trough the currency-box classes
    $('.currency-box').each(function(index, element) {
      //Find the value and remove the white space
      const name = $(element).find('img').attr('alt');
      const price = $(element).find('.value').text().replace(/\s\s+/g, '');
      //Log the item name and price
      console.log(name, price);
    });
    console.log('Done scraping.');
  }
});
