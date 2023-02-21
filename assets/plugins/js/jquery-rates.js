(function ($) {
  $.fn.rates = function (options) {
    // Default settings for the plugin if none are provided by the user
    const settings = $.extend({
      shadeColor: 'rates-yellow',
      shapeHeight: '25px',
      shapeCount: 5,
      shape: 'white-star',
      imagesFolderLocation: '',

    }, options);

    return this.each(function () {
      const container = this;
      $(container).addClass('rates-container');
      const $containerName = $(this).attr('id');

      const score = {
        value: 0,
      };

      createStars(settings.shapeCount);
      setSize();

      const $eachStar = $(this).find('img');

      // Colors in the rating shape on hover
      // Removes the color from above the selected rating on mouse out
      $(this).find('img').hover(function () {
        const starIndex = $eachStar.index(this);
        colorShapesToIndex(starIndex);
      }, () => {
        colorShapesToScore();
      });

      // Sets the score rating based on which rating shape was clicked
      $(this).find('img').on('click', function () {
        const starIndex = $eachStar.index(this);
        colorShapesToIndex(starIndex);
        score.value = starIndex + 1;
        $(`#${$containerName}Rating`).val(score.value);
      });

      // Sets the size of stars indicated in the settings
      function setSize() {
        $(container).find('img').css('height', settings.shapeHeight);
      }

      // Dynamically creates the html markup based on the number of stars indicated
      function createStars(count) {
        const starInput = $(`<input type="hidden" id = "${$containerName}Rating" name="${$containerName}Rating" value="0" >`);
        $(container).append(starInput);
        for (let i = 0; i < count; i++) {
          const $imageStar = $('<img>');
          $imageStar.attr('src', `${settings.imagesFolderLocation}images/${settings.shape}.png`);
          $(container).append($imageStar);
        }
      }

      // Resets the shading class on the shapes to color only those up until a designated index
      function colorShapesToIndex(starIndexValue) {
        $eachStar.removeClass(settings.shadeColor);
        for (let i = 0; i <= starIndexValue; i++) {
          const star = $eachStar.get(i);
          $(star).toggleClass(settings.shadeColor);
        }
      }

      // Resets the shading class on the shapes to color only those up to and including the selected score
      function colorShapesToScore() {
        $eachStar.removeClass(settings.shadeColor);
        for (let j = 0; j < score.value; j++) {
          const star = $eachStar.get(j);
          $(star).toggleClass(settings.shadeColor);
        }
      }
    });
  };
}(jQuery));
