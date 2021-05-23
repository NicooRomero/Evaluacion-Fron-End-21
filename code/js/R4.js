// Api weatherstack
const apiKeyW = 'a22705f38273a9ca67b0f8b5ffb3d598';
const urlW = `http://api.weatherstack.com/current?access_key=${apiKeyW}&query=argentina`;
    
    
        fetch(urlW)
            .then(response => response.json() )
            .then(result => showDataW(result) )
            .catch(err => console.log(err))
    
        const showDataW = (data) => {
            let htmlW = '';

                htmlW += `
                <div class="weather-info">
                    <h2>${data.location.name},</h2>
                    <h2>${data.location.country}</h2>
                    <p>${data.current.temperature}°</p>
                    <img src="${data.current.weather_icons[0]}" alt="icon">
                </div>
                `;
                
                document.querySelector("#data-w").innerHTML = htmlW;
            
            let htmlT = '';

                htmlT += `
                    <td>${data.location.name}</td>
                    <td>${data.location.country}</td>
                    <td>${data.current.temperature}°</td>
                    <td>${data.current.cloudcover}%</td>
                    <td>${data.location.localtime}</td>
                    <td><img src="${data.current.weather_icons[0]}" alt="icon"></td>
                `;
            
                document.querySelector("#data-t").innerHTML = htmlT;
        }

// Api mediastack
const apiKey = 'd87f9c5fd05f7fc817232a2d2d075be2';
const url = `http://api.mediastack.com/v1/news?access_key=${apiKey}&languages=es,-ar&limit=3`;


    fetch(url)
        .then(response => response.json() )
        .then(result => showData(result.data) )
        .catch(err => console.log(err))

    const showData = (data) => {
        let html = '';
        for (let i = 0; i < data.length; i++) {
            html += `
            <div class="card-content">
                <h1>${data[i].title}</h1>
                <p>${data[i].description}</p>
                <div class="card-content__btn">
                    <a href="${data[i].url}" target="_blank">Ver más</a>
                </div>
            </div>
            `;
            
            document.querySelector("#data").innerHTML = html;
        }
        
    }