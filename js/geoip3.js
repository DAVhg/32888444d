if (!Array.prototype.find) {
    Array.prototype.find = function(predicate) {
        if (this == null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

       for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    };
}

var CDGGeoIp = function(){}

CDGGeoIp.prototype.country_hash = [{
    "name": "Afghanistan",
    "code": "AF",
    "site": "uk"
}, {
    "name": "Åland Islands",
    "code": "AX",
    "site": "uk"
}, {
    "name": "Albania",
    "code": "AL",
    "site": "uk"
}, {
    "name": "Algeria",
    "code": "DZ",
    "site": "uk"
}, {
    "name": "American Samoa",
    "code": "AS",
    "site": "uk"
}, {
    "name": "Andorra",
    "code": "AD",
    "site": "uk"
}, {
    "name": "Angola",
    "code": "AO",
    "site": "uk"
}, {
    "name": "Anguilla",
    "code": "AI",
    "site": "us"
}, {
    "name": "Antigua and Barbuda",
    "code": "AG",
    "site": "uk"
}, {
    "name": "Argentina",
    "code": "AR",
    "site": "us"
}, {
    "name": "Armenia",
    "code": "AM",
    "site": "uk"
}, {
    "name": "Aruba",
    "code": "AW",
    "site": "uk"
}, {
    "name": "Australia",
    "code": "AU",
    "site": "intl"
}, {
    "name": "Austria",
    "code": "AT",
    "site": "uk"
}, {
    "name": "Azerbaijan",
    "code": "AZ",
    "site": "uk"
}, {
    "name": "Bahamas",
    "code": "BS",
    "site": "uk"
}, {
    "name": "Bahrain",
    "code": "BH",
    "site": "uk"
}, {
    "name": "Bangladesh",
    "code": "BD",
    "site": "uk"
}, {
    "name": "Barbados",
    "code": "BB",
    "site": "uk"
}, {
    "name": "Belarus",
    "code": "BY",
    "site": "uk"
}, {
    "name": "Belgium",
    "code": "BE",
    "site": "uk"
}, {
    "name": "Belize",
    "code": "BZ",
    "site": "us"
}, {
    "name": "Benin",
    "code": "BJ",
    "site": "uk"
}, {
    "name": "Bermuda",
    "code": "BM",
    "site": "us"
}, {
    "name": "Bhutan",
    "code": "BT",
    "site": "uk"
}, {
    "name": "Bolivia, Plurinational State of ",
    "code": "BO",
    "site": "uk"
}, {
    "name": "Bonaire, Sint Eustatius and Saba ",
    "code": "BQ",
    "site": "uk"
}, {
    "name": "Bosnia and Herzegovina",
    "code": "BA",
    "site": "uk"
}, {
    "name": "Botswana",
    "code": "BW",
    "site": "uk"
}, {
    "name": "Bouvet Island",
    "code": "BV",
    "site": "uk"
}, {
    "name": "Brazil",
    "code": "BR",
    "site": "us"
}, {
    "name": "British Indian Ocean Territory",
    "code": "IO",
    "site": "uk"
}, {
    "name": "Brunei Darussalam",
    "code": "BN",
    "site": "uk"
}, {
    "name": "Bulgaria",
    "code": "BG",
    "site": "uk"
}, {
    "name": "Burkina Faso",
    "code": "BF",
    "site": "uk"
}, {
    "name": "Burundi",
    "code": "BI",
    "site": "uk"
}, {
    "name": "Cambodia",
    "code": "KH",
    "site": "intl"
}, {
    "name": "Cameroon",
    "code": "CM",
    "site": "uk"
}, {
    "name": "Canada",
    "code": "CA",
    "site": "us"
}, {
    "name": "Cape Verde",
    "code": "CV",
    "site": "uk"
}, {
    "name": "Cayman Islands",
    "code": "KY",
    "site": "us"
}, {
    "name": "Central African Republic",
    "code": "CF",
    "site": "uk"
}, {
    "name": "Chad",
    "code": "TD",
    "site": "uk"
}, {
    "name": "Chile",
    "code": "CL",
    "site": "us"
}, {
    "name": "China",
    "code": "CN",
    "site": "intl"
}, {
    "name": "Christmas Island",
    "code": "CX",
    "site": "uk"
}, {
    "name": "Cocos (Keeling) Islands",
    "code": "CC",
    "site": "uk"
}, {
    "name": "Colombia",
    "code": "CO",
    "site": "us"
}, {
    "name": "Comoros",
    "code": "KM",
    "site": "uk"
}, {
    "name": "Congo",
    "code": "CG",
    "site": "uk"
}, {
    "name": " Congo, the Democratic Republic of the ",
    "code": "CD",
    "site": "uk"
}, {
    "name": "Cook Islands",
    "code": "CK",
    "site": "uk"
}, {
    "name": "Costa Rica",
    "code": "CR",
    "site": "us"
}, {
    "name": "Côte d'Ivoire",
    "code": "CI",
    "site": "uk"
}, {
    "name": "Croatia",
    "code": "HR",
    "site": "uk"
}, {
    "name": "Cuba",
    "code": "CU",
    "site": "uk"
}, {
    "name": "Curaçao",
    "code": "CW",
    "site": "uk"
}, {
    "name": "Cyprus",
    "code": "CY",
    "site": "uk"
}, {
    "name": "Czech Republic",
    "code": "CZ",
    "site": "uk"
}, {
    "name": "Denmark",
    "code": "DK",
    "site": "uk"
}, {
    "name": "Djibouti",
    "code": "DJ",
    "site": "uk"
}, {
    "name": "Dominica",
    "code": "DM",
    "site": "uk"
}, {
    "name": "Dominican Republic",
    "code": "DO",
    "site": "uk"
}, {
    "name": "Ecuador",
    "code": "EC",
    "site": "uk"
}, {
    "name": "Egypt",
    "code": "EG",
    "site": "uk"
}, {
    "name": "El Salvador",
    "code": "SV",
    "site": "uk"
}, {
    "name": "Equatorial Guinea",
    "code": "GQ",
    "site": "uk"
}, {
    "name": "Eritrea",
    "code": "ER",
    "site": "uk"
}, {
    "name": "Estonia",
    "code": "EE",
    "site": "uk"
}, {
    "name": "Ethiopia",
    "code": "ET",
    "site": "uk"
}, {
    "name": "Falkland Islands (Malvinas)",
    "code": "FK",
    "site": "uk"
}, {
    "name": "Faroe Islands",
    "code": "FO",
    "site": "uk"
}, {
    "name": "Fiji",
    "code": "FJ",
    "site": "uk"
}, {
    "name": "Finland",
    "code": "FI",
    "site": "uk"
}, {
    "name": "France",
    "code": "FR",
    "site": "uk"
}, {
    "name": "French Guiana",
    "code": "GF",
    "site": "us"
}, {
    "name": "French Polynesia",
    "code": "PF",
    "site": "uk"
}, {
    "name": "French Southern Territories",
    "code": "TF",
    "site": "uk"
}, {
    "name": "Gabon",
    "code": "GA",
    "site": "uk"
}, {
    "name": "Gambia",
    "code": "GM",
    "site": "uk"
}, {
    "name": "Georgia",
    "code": "GE",
    "site": "uk"
}, {
    "name": "Germany",
    "code": "DE",
    "site": "uk"
}, {
    "name": "Ghana",
    "code": "GH",
    "site": "uk"
}, {
    "name": "Gibraltar",
    "code": "GI",
    "site": "uk"
}, {
    "name": "Greece",
    "code": "GR",
    "site": "uk"
}, {
    "name": "Greenland",
    "code": "GL",
    "site": "uk"
}, {
    "name": "Grenada",
    "code": "GD",
    "site": "uk"
}, {
    "name": "Guadeloupe",
    "code": "GP",
    "site": "us"
}, {
    "name": "Guatemala",
    "code": "GT",
    "site": "uk"
}, {
    "name": "Guernsey",
    "code": "GG",
    "site": "uk"
}, {
    "name": "Guinea",
    "code": "GN",
    "site": "uk"
}, {
    "name": "Guinea-Bissau",
    "code": "GW",
    "site": "uk"
}, {
    "name": "Guyana",
    "code": "GY",
    "site": "uk"
}, {
    "name": "Haiti",
    "code": "HT",
    "site": "us"
}, {
    "name": "Heard Island and McDonald Islands",
    "code": "HM",
    "site": "uk"
}, {
    "name": "Holy See (Vatican City State)",
    "code": "VA",
    "site": "uk"
}, {
    "name": "Honduras",
    "code": "HN",
    "site": "us"
}, {
    "name": "Hong Kong",
    "code": "HK",
    "site": "intl"
}, {
    "name": "Hungary",
    "code": "HU",
    "site": "uk"
}, {
    "name": "Iceland",
    "code": "IS",
    "site": "uk"
}, {
    "name": "India",
    "code": "IN",
    "site": "uk"
}, {
    "name": "Indonesia",
    "code": "ID",
    "site": "intl"
}, {
    "name": "Iran, Islamic Republic of ",
    "code": "IR",
    "site": "uk"
}, {
    "name": "Iraq",
    "code": "IQ",
    "site": "uk"
}, {
    "name": "Ireland",
    "code": "IE",
    "site": "uk"
}, {
    "name": "Isle of Man",
    "code": "IM",
    "site": "uk"
}, {
    "name": "Israel",
    "code": "IL",
    "site": "uk"
}, {
    "name": "Italy",
    "code": "IT",
    "site": "uk"
}, {
    "name": "Jamaica",
    "code": "JM",
    "site": "uk"
}, {
    "name": "Japan",
    "code": "JP",
    "site": "jp"
}, {
    "name": "Jersey",
    "code": "JE",
    "site": "uk"
}, {
    "name": "Jordan",
    "code": "JO",
    "site": "uk"
}, {
    "name": "Kazakhstan",
    "code": "KZ",
    "site": "uk"
}, {
    "name": "Kenya",
    "code": "KE",
    "site": "uk"
}, {
    "name": "Kiribati",
    "code": "KI",
    "site": "uk"
}, {
    "name": "Korea, Democratic People 's Republic of",
    "code": "KP",
    "site": "uk"
}, {
    "name": "Korea, Republic of ",
    "code": "KR",
    "site": "intl"
}, {
    "name": "Kosovo",
    "code": "XK",
    "site": "uk"
}, {
    "name": "Kuwait",
    "code": "KW",
    "site": "uk"
}, {
    "name": "Kyrgyzstan",
    "code": "KG",
    "site": "uk"
}, {
    "name": "Lao People's Democratic Republic",
    "code": "LA",
    "site": "uk"
}, {
    "name": "Latvia",
    "code": "LV",
    "site": "uk"
}, {
    "name": "Lebanon",
    "code": "LB",
    "site": "uk"
}, {
    "name": "Lesotho",
    "code": "LS",
    "site": "uk"
}, {
    "name": "Liberia",
    "code": "LR",
    "site": "uk"
}, {
    "name": "Libya",
    "code": "LY",
    "site": "ik"
}, {
    "name": "Liechtenstein",
    "code": "LI",
    "site": "uk"
}, {
    "name": "Lithuania",
    "code": "LT",
    "site": "uk"
}, {
    "name": "Luxembourg",
    "code": "LU",
    "site": "uk"
}, {
    "name": "Macao",
    "code": "MO",
    "site": "intl"
}, {
    "name": "Macedonia, the Former Yugoslav Republic of ",
    "code": "MK",
    "site": "uk"
}, {
    "name": "Madagascar",
    "code": "MG",
    "site": "uk"
}, {
    "name": "Malawi",
    "code": "MW",
    "site": "uk"
}, {
    "name": "Malaysia",
    "code": "MY",
    "site": "intl"
}, {
    "name": "Maldives",
    "code": "MV",
    "site": "uk"
}, {
    "name": "Mali",
    "code": "ML",
    "site": "uk"
}, {
    "name": "Malta",
    "code": "MT",
    "site": "uk"
}, {
    "name": "Martinique",
    "code": "MQ",
    "site": "us"
}, {
    "name": "Mauritania",
    "code": "MR",
    "site": "uk"
}, {
    "name": "Mauritius",
    "code": "MU",
    "site": "uk"
}, {
    "name": "Mayotte",
    "code": "YT",
    "site": "uk"
}, {
    "name": "Mexico",
    "code": "MX",
    "site": "us"
}, {
    "name": "Moldova Republic of",
    "code": "MD",
    "site": "uk"
}, {
    "name": "Monaco",
    "code": "MC",
    "site": "uk"
}, {
    "name": "Mongolia",
    "code": "MN",
    "site": "intl"
}, {
    "name": "Montenegro",
    "code": "ME",
    "site": "uk"
}, {
    "name": "Montserrat",
    "code": "MS",
    "site": "uk"
}, {
    "name": "Morocco",
    "code": "MA",
    "site": "uk"
}, {
    "name": "Mozambique",
    "code": "MZ",
    "site": "uk"
}, {
    "name": "Myanmar",
    "code": "MM",
    "site": "uk"
}, {
    "name": "Namibia",
    "code": "NA",
    "site": "uk"
}, {
    "name": "Nauru",
    "code": "NR",
    "site": "uk"
}, {
    "name": "Nepal",
    "code": "NP",
    "site": "uk"
}, {
    "name": "Netherlands",
    "code": "NL",
    "site": "uk"
}, {
    "name": "New Caledonia",
    "code": "NC",
    "site": "uk"
}, {
    "name": "New Zealand",
    "code": "NZ",
    "site": "intl"
}, {
    "name": "Nicaragua",
    "code": "NI",
    "site": "uk"
}, {
    "name": "Niger",
    "code": "NE",
    "site": "uk"
}, {
    "name": "Nigeria",
    "code": "NG",
    "site": "uk"
}, {
    "name": "Niue",
    "code": "NU",
    "site": "uk"
}, {
    "name": "Norfolk Island",
    "code": "NF",
    "site": "uk"
}, {
    "name": "Norway",
    "code": "NO",
    "site": "uk"
}, {
    "name": "Oman",
    "code": "OM",
    "site": "uk"
}, {
    "name": "Pakistan",
    "code": "PK",
    "site": "uk"
}, {
    "name": "Panama",
    "code": "PA",
    "site": "uk"
}, {
    "name": "Papua New Guinea",
    "code": "PG",
    "site": "uk"
}, {
    "name": "Paraguay",
    "code": "PY",
    "site": "uk"
}, {
    "name": "Peru",
    "code": "PE",
    "site": "us"
}, {
    "name": "Philippines",
    "code": "PH",
    "site": "intl"
}, {
    "name": "Pitcairn",
    "code": "PN",
    "site": "uk"
}, {
    "name": "Poland",
    "code": "PL",
    "site": "uk"
}, {
    "name": "Portugal",
    "code": "PT",
    "site": "uk"
}, {
    "name": "Qatar",
    "code": "QA",
    "site": "uk"
}, {
    "name": "reunion",
    "code": "RE",
    "site": "uk"
}, {
    "name": "Romania",
    "code": "RO",
    "site": "uk"
}, {
    "name": "Russian Federation",
    "code": "RU",
    "site": "uk"
}, {
    "name": "Rwanda",
    "code": "RW",
    "site": "uk"
}, {
    "name": "Saint Barthélemy",
    "code": "BL",
    "site": "uk"
}, {
    "name": "Saint Helena, Ascension and Tristan da Cunha",
    "code": "SH",
    "site": "uk"
}, {
    "name": "Saint Kitts and Nevis",
    "code": "KN",
    "site": "uk"
}, {
    "name": "Saint Lucia",
    "code": "LC",
    "site": "uk"
}, {
    "name": "Saint Martin (French part)",
    "code": "MF",
    "site": "uk"
}, {
    "name": "Saint Pierre and Miquelon",
    "code": "PM",
    "site": "uk"
}, {
    "name": "Saint Vincent and the Grenadines",
    "code": "VC",
    "site": "uk"
}, {
    "name": "Samoa",
    "code": "WS",
    "site": "uk"
}, {
    "name": "San Marino",
    "code": "SM",
    "site": "uk"
}, {
    "name": "Sao Tome and Principe",
    "code": "ST",
    "site": "uk"
}, {
    "name": "Saudi Arabia",
    "code": "SA",
    "site": "uk"
}, {
    "name": "Senegal",
    "code": "SN",
    "site": "uk"
}, {
    "name": "Serbia",
    "code": "RS",
    "site": "uk"
}, {
    "name": "Seychelles",
    "code": "SC",
    "site": "uk"
}, {
    "name": "Sierra Leone",
    "code": "SL",
    "site": "uk"
}, {
    "name": "Singapore",
    "code": "SG",
    "site": "intl"
}, {
    "name": "Sint Maarten (Dutch part)",
    "code": "SX",
    "site": "uk"
}, {
    "name": "Slovakia",
    "code": "SK",
    "site": "uk"
}, {
    "name": "Slovenia",
    "code": "SI",
    "site": "uk"
}, {
    "name": "Solomon Islands",
    "code": "SB",
    "site": "uk"
}, {
    "name": "Somalia",
    "code": "SO",
    "site": "uk"
}, {
    "name": "South Africa",
    "code": "ZA",
    "site": "uk"
}, {
    "name": "South Georgia and the South Sandwich Islands",
    "code": "GS",
    "site": "uk"
}, {
    "name": "South Sudan",
    "code": "SS",
    "site": "uk"
}, {
    "name": "Spain",
    "code": "ES",
    "site": "uk"
}, {
    "name": "Sri Lanka",
    "code": "LK",
    "site": "uk"
}, {
    "name": "Sudan",
    "code": "SD",
    "site": "uk"
}, {
    "name": "Suriname",
    "code": "SR",
    "site": "us"
}, {
    "name": "Svalbard and Jan Mayen",
    "code": "SJ",
    "site": "uk"
}, {
    "name": "Swaziland",
    "code": "SZ",
    "site": "uk"
}, {
    "name": "Sweden",
    "code": "SE",
    "site": "uk"
}, {
    "name": "Switzerland",
    "code": "CH",
    "site": "uk"
}, {
    "name": "Syrian Arab Republic",
    "code": "SY",
    "site": "uk"
}, {
    "name": "Taiwan",
    "code": "TW",
    "site": "intl"
}, {
    "name": "Tajikistan",
    "code": "TJ",
    "site": "uk"
}, {
    "name": "Tanzania, United Republic of ",
    "code": "TZ",
    "site": "uk"
}, {
    "name": "Thailand",
    "code": "TH",
    "site": "intl"
}, {
    "name": "Timor-Leste",
    "code": "TL",
    "site": "uk"
}, {
    "name": "Togo",
    "code": "TG",
    "site": "uk"
}, {
    "name": "Tokelau",
    "code": "TK",
    "site": "uk"
}, {
    "name": "Tonga",
    "code": "TO",
    "site": "uk"
}, {
    "name": "Trinidad and Tobago",
    "code": "TT",
    "site": "uk"
}, {
    "name": "Tunisia",
    "code": "TN",
    "site": "uk"
}, {
    "name": "Turkey",
    "code": "TR",
    "site": "uk"
}, {
    "name": "Turkmenistan",
    "code": "TM",
    "site": "uk"
}, {
    "name": "Turks and Caicos Islands",
    "code": "TC",
    "site": "uk"
}, {
    "name": "Tuvalu",
    "code": "TV",
    "site": "uk"
}, {
    "name": "Uganda",
    "code": "UG",
    "site": "uk"
}, {
    "name": "Ukraine",
    "code": "UA",
    "site": "uk"
}, {
    "name": "United Arab Emirates",
    "code": "AE",
    "site": "uk"
}, {
    "name": "United Kingdom",
    "code": "GB",
    "site": "uk"
}, {
    "name": "United States",
    "code": "US",
    "site": "us"
}, {
    "name": "United States Minor Outlying Islands",
    "code": "UM",
    "site": "uk"
}, {
    "name": "Uruguay",
    "code": "UY",
    "site": "uk"
}, {
    "name": "Uzbekistan",
    "code": "UZ",
    "site": "uk"
}, {
    "name": "Vanuatu",
    "code": "VU",
    "site": "uk"
}, {
    "name": "Venezuela",
    "code": "VE",
    "site": "uk"
}, {
    "name": "Viet Nam",
    "code": "VN",
    "site": "intl"
}, {
    "name": "Virgin Islands, British",
    "code": "VG",
    "site": "uk"
}, {
    "name": "Wallis and Futuna",
    "code": "WF",
    "site": "uk"
}, {
    "name": "Western Sahara",
    "code": "EH",
    "site": "uk"
}, {
    "name": "Yemen",
    "code": "YE",
    "site": "uk"
}, {
    "name": "Zambia",
    "code": "ZM",
    "site": "uk"
}, {
    "name": "Zimbabwe",
    "code": "ZW",
    "site": "uk"
}];

// 
CDGGeoIp.prototype.websites = {
    "uk": {
    	"url": "https://intl.cdgcdgcdg.com/"
	},
    "us": {
    	"url": "https://intl.cdgcdgcdg.com/"
	},
    "intl": {
    	"url": "https://intl.cdgcdgcdg.com/"
	},
    "jp": {
    	"url": "https://jp.cdgcdgcdg.com/"
    }
};

if (location.hostname === "localhost" || location.hostname === "127.0.0.1"){
    CDGGeoIp.prototype.cookie_settings = {  };
} else {
    CDGGeoIp.prototype.cookie_settings = { domain: '.cdgcdgcdg.com' };
}

CDGGeoIp.prototype.set_users_preferred_country = function(country_code)
{
    Cookies.set('country_code', country_code, this.cookieSettings);
}

CDGGeoIp.prototype.get_users_preferred_country = function(callback)
{
    var cookie_code = Cookies.get('country_code', this.cookieSettings),
        that = this;

    if (cookie_code){
        callback.call(this, cookie_code);
        return;
    }

    if (!('geoip2' in window)) {
        console.log('geoip2 is not loaded on the page.');
        return false;
    }

    geoip2.country(function (resp) {
        var country_code = resp.country.iso_code;
        that.set_users_preferred_country(country_code);
        callback.call(that, country_code);
    }, function (resp) {
        // Call the callback with false, we couldn't determine the location
        callback.call(that, false);
    });
};

CDGGeoIp.prototype.get_users_preferred_website = function(callback)
{
    this.get_users_preferred_country(function(country_code){
        if (false === country_code){
            // Call the callback with false, we couldn't determine the location
            callback.call(this, false);
        } else {
            var website = this.get_website_for_country(country_code);
            callback.call(this, website);
        }
    });
};

CDGGeoIp.prototype.get_country_data = function(country_code){
    return this.country_hash.find(function (item) {
        return item.code === country_code;
    });
};

CDGGeoIp.prototype.get_website = function(website_code){
	return this.websites[website_code] === 'undefined' ? false : this.websites[website_code];
};

CDGGeoIp.prototype.get_website_for_country = function (country_code) {
	var country = this.get_country_data(country_code);

	if (!country) {
        return false;
	}

	return this.get_website(country.site);
};
