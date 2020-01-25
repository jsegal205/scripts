const scriptdestinations = [
  {
    lat: 27.739783,
    lng: -82.752435,
    city: "St. Pete Beach, FL",
    visit: ["October 2011", "May 2008"]
  },
  {
    lat: 29.959882,
    lng: -90.067956,
    city: "New Orleans, LA",
    visit: ["October 2017"]
  },
  {
    lat: 29.424122,
    lng: -98.493628,
    city: "San Antonio, TX",
    visit: ["February 2018", "February 2016", "April 2014"]
  },
  {
    lat: 30.267153,
    lng: -97.743061,
    city: "Austin, TX",
    visit: ["February 2018", "April 2014"]
  },
  {
    lat: 34.052234,
    lng: -118.243685,
    city: "Los Angeles, CA",
    visit: ["October 2012"]
  },
  {
    lat: 35.142753,
    lng: -120.641283,
    city: "Pismo Beach, CA",
    visit: ["October 2012"]
  },
  {
    lat: 36.555239,
    lng: -121.923288,
    city: "Carmel, CA",
    visit: ["October 2012"]
  },
  {
    lat: 37.774929,
    lng: -122.419416,
    city: "San Fransisco, CA",
    visit: ["October 2012"]
  },
  {
    lat: 36.110524,
    lng: -115.172896,
    city: "Las Vegas, NV",
    visit: ["April 2013", "May 2010"]
  },
  {
    lat: 45.523062,
    lng: -122.676482,
    city: "Portland, OR",
    visit: ["July 2015"]
  },
  {
    lat: 44.012122,
    lng: -92.480199,
    city: "Rochester, MN",
    visit: ["June 2015"]
  },
  {
    lat: 42.416674,
    lng: -90.429017,
    city: "Galena, IL",
    visit: ["August 2010"]
  },
  {
    lat: 45.822448,
    lng: -91.889343,
    city: "Spooner, WI",
    visit: ["June 2019", "May 2019", "July 2018", "August 2017", "June 2017"]
  },
  {
    lat: 43.038902,
    lng: -87.906474,
    city: "Milwaukee, WI",
    visit: ["April 2012"]
  },
  {
    lat: 39.768403,
    lng: -86.158068,
    city: "Indianapolis, IN",
    visit: ["February 2009"]
  },
  {
    lat: 42.331427,
    lng: -83.045754,
    city: "Detroit, MI",
    visit: ["April 2012"]
  },
  {
    lat: 43.086818,
    lng: -79.066544,
    city: "Niagara Falls, NY",
    visit: ["April 2012"]
  },
  {
    lat: 43.156578,
    lng: -77.608847,
    city: "Rochester, NY",
    visit: ["April 2012"]
  },
  {
    lat: 38.907192,
    lng: -77.036871,
    city: "Washington, DC",
    visit: ["October 2013"]
  },
  { lat: 39.739236, lng: -104.990251, city: "Denver, CO", visit: ["May 2015"] },
  {
    lat: 41.902783,
    lng: 12.496366,
    city: "Rome, Italy",
    visit: ["October 2014"]
  },
  {
    lat: 43.76956,
    lng: 11.255814,
    city: "Florence, Italy",
    visit: ["October 2014"]
  },
  {
    lat: 45.440847,
    lng: 12.315515,
    city: "Venice, Italy",
    visit: ["October 2014"]
  },
  { lat: 40.416775, lng: -3.70379, city: "Madrid, Spain", visit: ["May 2018"] },
  {
    lat: 39.862832,
    lng: -4.027323,
    city: "Toledo, Spain",
    visit: ["May 2018"]
  },
  {
    lat: 41.385064,
    lng: 2.173403,
    city: "Barcelona, Spain",
    visit: ["May 2018"]
  },
  {
    lat: 37.389092,
    lng: -5.984459,
    city: "Seville, Spain",
    visit: ["May 2018"]
  },
  {
    lat: 26.122439,
    lng: -80.137317,
    city: "Fort Lauderdale, FL",
    visit: ["November 2016"]
  },
  {
    lat: 38.627003,
    lng: -90.199404,
    city: "St. Louis, MO",
    visit: ["July 2009"]
  },
  {
    lat: 38.955603,
    lng: -90.186776,
    city: "Godfrey, IL",
    visit: ["July 2018"]
  },
  {
    lat: 36.685863,
    lng: -93.330578,
    city: "West Branson, MO",
    visit: ["July 2018"]
  },
  {
    lat: 43.64535,
    lng: -79.380215,
    city: "Toronto, Ontario, Canada",
    visit: ["October 2018"]
  },
  {
    lat: 28.47521,
    lng: -81.47493,
    city: "Orlando, FL",
    visit: ["January 2019"]
  },
  {
    lat: 21.306944,
    lng: -157.858337,
    city: "Honolulu, HI",
    visit: ["August 2019"]
  },
  {
    lat: 20.92269,
    lng: -156.69296,
    city: "Kaanapali, HI",
    visit: ["August 2019"]
  },
  {
    lat: 39.9563,
    lng: -83.0041,
    city: "Columbus, OH",
    visit: ["September 2019", "October 2019", "December 2019"]
  }
];

const months = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12
};

const dataToSQLString = () => {
  let output = "";

  scriptdestinations.map(dest => {
    const citystate = dest.city.split(",");
    output += `
    INSERT INTO destinations ("city", "state", "country", "lat", "long")
      VALUES (''${citystate[0].trim()}'',''${citystate[1].trim()}'',''USA'',${
      dest.lat
    },${dest.lng})
      RETURNING id INTO destId;

    INSERT INTO destination_visits (destination_id, month, year)
      VALUES ${dest.visit.map(v => {
        const monthyear = v.split(" ");
        const vout = `(destId, ${months[monthyear[0]]}, ${monthyear[1]})`;
        return dest.visit[dest.visit.length - 1] == v ? `${vout};` : `${vout}`;
      })}

    `;
    return output;
  });

  console.log(output);
};

// INSERT INTO destinations ("city", "state", "country", "lat", "long")
//       VALUES (''Austin'',''TX'',''USA'',30.267153,-97.743061)
//       RETURNING id INTO destId;
//   INSERT INTO destination_visits (destination_id, month, year)
//       VALUES  (destId, 4, 2014),
//               (destId, 2, 2018);
dataToSQLString();
