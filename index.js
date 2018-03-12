// Code your solution in this file!
function logDriverNames(drivers){
  for(let driver of drivers){
    console.log(driver.name);
  };
};


function logDriversByHometown(drivers, location){
  drivers.forEach(function(driver) {
    if (driver.hometown === location){
      console.log(driver.name);
    };
  });
};

function driversByRevenue(drivers){
  return drivers.slice().sort(function(a,b){
    return a.revenue - b.revenue
  });
};

function driversByName(drivers){
  return drivers.slice().sort(function(a,b){
    return a.name.localeCompare(b.name);
  });
};

function totalRevenue(drivers){
  let revenues = drivers.map(driver => driver.revenue);
  return revenues.reduce((acc, val) => acc + val);
};

function averageRevenue(drivers){
  let revenues = drivers.map(driver => driver.revenue);
  return revenues.reduce((acc, val) => acc + val)/drivers.length;
};
