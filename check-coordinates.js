const https = require("https");

const address =
  "Чеченская Республика, Гудермесский р-н, с. Шуани, ул Р.Исаева, д. 40";
const apiKey = "eb28ad4b-453e-4833-a753-7bcd2928a01b";
const url = `https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&format=json&geocode=${encodeURIComponent(
  address
)}`;

https
  .get(url, (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      try {
        const jsonData = JSON.parse(data);
        if (jsonData.response.GeoObjectCollection.featureMember.length > 0) {
          const geoObject =
            jsonData.response.GeoObjectCollection.featureMember[0].GeoObject;
          const coords = geoObject.Point.pos;
          const [lon, lat] = coords.split(" ");
          console.log(
            "Найденный адрес:",
            geoObject.metaDataProperty.GeocoderMetaData.text
          );
          console.log("Координаты:", lat + ", " + lon);
          console.log("Широта:", lat);
          console.log("Долгота:", lon);
        } else {
          console.log("Адрес не найден");
        }
      } catch (err) {
        console.error("Ошибка парсинга:", err);
      }
    });
  })
  .on("error", (err) => {
    console.error("Ошибка запроса:", err);
  });
