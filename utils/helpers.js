module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },

    click_button: () => {
        // when signup is clicked the page changes render
        return document
            .querySelector('#signup').addEventListener("click", function () {
                console.log("yikes");
            })
            ;
        // when login is clicked the page changes render

    }
  };
  