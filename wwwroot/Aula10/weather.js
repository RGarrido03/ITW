$(document).ready(function () {
    function addData() {
        var self = this;
        self.weatherInfo = ko.observable();

        self.cityChanged = function () {
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather",
                data: {
                    q: $("#citySelector").val(),
                    APPID: 'b2b1df463182c3cca5276e9d3267cc95'
                },
                success: function (data) {
                    self.weatherInfo(data);
                },
                error: function () {
                    alert('Erro!');
                }
            });
        }
    }
    ko.applyBindings(new addData())
});