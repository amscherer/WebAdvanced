let ntasAPI = 'https://data.cityofnewyork.us/resource/q2z5-ai38.geojson';

// Initialize selected year as blank
let selectedYear = '';

// Set the projection for the map so it shows up on the canvas and in the corrct location
let projection = d3.geoMercator()
    .scale(85000)
    .center([-74.099, 40.799]);
let path = d3.geoPath(projection);

//some necessary global variable thingzzzz
let ntaData
let violationData


// My canvas space that gets appended to the html body in a div
let canvas = d3.select('#canvas')

// The async load for basic geography of the map
d3.json(ntasAPI).then(
    (data, error) => {
        if (error) {
            console.log(error);
        } else {
            ntaData = data.features;
            // console.log(ntaData);
        }
    }
);

let drawMap = () => {
    canvas.selectAll('path').remove();

    canvas.selectAll('path')
        .data(ntaData)
        .enter()
        .append('path')
        // .attr('d',d3.geoPath())
        .attr('d',path)
        .attr('class', 'ntaname')
        .attr('stroke-width','1px')
        .attr('stroke','white')
        .attr('fill', (ntaDataItem) => {
            let ntaname = ntaDataItem.properties.ntaname
            let nta = violationData.find((item) => {
                return item.ntaname === ntaname
            })
            
            if (nta && nta.bblviolations){
                let violations = nta.bblviolations
                if (violations <= 44){
                    return'#d1d1d1'
                } else if (violations <=108){
                    return '#999999'
                }else if(violations <=209){
                    return '#616365'
                }else if (violations <=325){
                    return '#333333'
                }else if(violations <= 612){
                    return 'black'
                }
            } else {
                //for the areas where no lead violations issued
                return '#f3f3f3'
            }
            
        })
};

// Function to async load the violation data for a specific year 
let loadViolationData = (year) => {
    d3.json(`aggregatedData/agdata${year}.json`).then(
        (data, error) => {
            if (error) {
                console.log(error);
            } else {
                violationData = data;
                drawMap();                             
            }
        }
    );
};

// Event listener for the year buttons
d3.selectAll('.year-btn')
    .on('click', function() {
        selectedYear = d3.select(this).attr('id');
        loadViolationData(selectedYear);
        
    });
    
// loadViolationData(selectedYear);
