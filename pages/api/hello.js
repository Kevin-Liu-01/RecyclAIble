export default function handler(req, res) {
  axios
    .get("http://d538-128-91-56-203.ngrok.io/sendUIdata")
    .then((response) => {
      console.log(`/client/ returned response from host: `, response.data);
      setData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
