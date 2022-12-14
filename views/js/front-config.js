/**
* 2007-2022 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author    PrestaShop SA <contact@prestashop.com>
*  @copyright 2007-2022 PrestaShop SA
*  @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*
* Don't forget to prefix your containers with your own identifier
* to avoid any conflicts with others containers.
*/

$(document).ready(() => {
  const watermark_text = document.querySelector('#mobytic_watermark_text').value;
  const watermark_color = document.querySelector('#mobytic_watermark_color').value;
  const watermark_opacity = document.querySelector('#mobytic_watermark_opacity').value;
  const watermark_position = document.querySelector('#mobytic_watermark_position').value;
  /**
   * Product List
   * _________________________________________
   */
  // mobytic_add_watermark(watermark_text, '.product-thumbnail > img', '250', '18', 0);
  update_url_with_watermark(watermark_text, watermark_position, watermark_color, watermark_opacity, '.product-thumbnail > img');
  
  /**
   * Modal Quick View : Update cover image
   */
  $(".quick-view.js-quick-view").click(function () {
    
    setTimeout(() => {
      mobytic_add_watermark(watermark_text, '.product-cover > img', watermark_position, watermark_color, watermark_opacity, 800, 50);
      update_url_with_watermark(watermark_text, watermark_position, watermark_color, watermark_opacity, 'img.js-thumb', 80, 5);
    }, 1000);
    setTimeout(() => {
      mobytic_add_watermark(watermark_text, '.product-cover > img', watermark_position, watermark_color, watermark_opacity, 800, 50);
      update_url_with_watermark(watermark_text, watermark_position, watermark_color, watermark_opacity, 'img.js-thumb', 80, 5);
    }, 1500);

  });

  /**
   * Add To Cart Modal : Add Watermark
   */
  $("button.mobytic_add_to_cart_productlist").click(function () {
    
    setTimeout(() => {
      mobytic_add_watermark(watermark_text, '#blockcart-modal img.product-image', watermark_position, watermark_color, watermark_opacity, 200, 14);
    }, 1000);
    setTimeout(() => {
      mobytic_add_watermark(watermark_text, '#blockcart-modal img.product-image', watermark_position, watermark_color, watermark_opacity, 200, 14);
    }, 1500);

  });

  /**
   * Product Page
   * _________________________________________
   * 
   * Cover Image
   */
  update_url_with_watermark(watermark_text, watermark_position, watermark_color, watermark_opacity, '#product .product-cover > img', 800, 50);

  /**
   * Update Images URL in below list
   */
  if (document.querySelector('#product')) {
    update_url_with_watermark(watermark_text, watermark_position, watermark_color, watermark_opacity, 'img.js-thumb', 80, 5);
  }

  /**
   * Modal : Update showed img link & images list on the side 
   */
  $("#product .product-cover > div.layer").click(function () {
    document.querySelector('#product .modal-body > figure > img').src =  document.querySelector('#product .product-cover > img').src;
    update_url_with_watermark(watermark_text, watermark_position, watermark_color, watermark_opacity, 'img.js-modal-thumb');
  });

  /**
   * Add To Cart Modal : Add Watermark
   */
  $(document).ajaxSuccess(function() {
    update_url_with_watermark(watermark_text, watermark_position, watermark_color, watermark_opacity, '#product .product-cover > img', 800, 50);

    /**
     * Update Images URL in below list
     */
    if (document.querySelector('#product')) {
      update_url_with_watermark(watermark_text, watermark_position, watermark_color, watermark_opacity, 'img.js-thumb', 80, 5);
    }

    $("#product .product-cover > div.layer").click(function () {
      document.querySelector('#product .modal-body > figure > img').src =  document.querySelector('#product .product-cover > img').src;
      update_url_with_watermark(watermark_text, watermark_position, watermark_color, watermark_opacity, 'img.js-modal-thumb');
    });

    $("button.add-to-cart").click(function () {
    
      setTimeout(() => {
        mobytic_add_watermark(watermark_text, '#blockcart-modal img.product-image', watermark_position, watermark_color, watermark_opacity, 200, 14);
      }, 1000);
      setTimeout(() => {
        mobytic_add_watermark(watermark_text, '#blockcart-modal img.product-image', watermark_position, watermark_color, watermark_opacity, 200, 14);
      }, 1500);
  
    });

  });

  /**
   * Checkout Procedures
   * _________________________________________
   */
  mobytic_add_watermark(watermark_text, '#cart span.product-image > img, #checkout .media-object', watermark_position, watermark_color, watermark_opacity, 125, 12);
  mobytic_add_watermark(watermark_text, '#order-confirmation .order-confirmation-table .image > img', watermark_position, watermark_color, watermark_opacity, 250, 25);
});




/**
 * Function Add Watermark
 * @param {string} watermark_text 
 * @param {string} selector
 * @param {string} watermark_position 
 * @param {string} watermark_color 
 * @param {number} watermark_opacity 
 * @param {number} text_Width 
 * @param {number} text_Size 
 * @param {number} add_margin 
 */
function mobytic_add_watermark(
  watermark_text, 
  selector, 
  watermark_position, 
  watermark_color, 
  watermark_opacity,
  text_Width, 
  text_Size, 
  add_margin = 0,
  ) {
  $(selector).watermark({
    text: watermark_text,
    textWidth: text_Width,
    textSize: text_Size,
    textColor: watermark_color,
    textBg: 'rgba(0, 0, 0, 0)',
    gravity: watermark_position,
    opacity: watermark_opacity,
    margin: add_margin,
  });
}

/**
 * 
 * @param {string} watermark_text 
 * @param {string} watermark_position 
 * @param {string} watermark_color 
 * @param {number} watermark_opacity 
 * @param {string} selector 
 * @param {number} t_text_width 
 * @param {number} t_font_size 
 * @param {number} t_margin 
 * @param {number} l_text_width 
 * @param {number} l_font_size 
 * @param {number} l_margin 
 * @param {number} m_text_width 
 * @param {number} m_font_size 
 * @param {number} m_margin 
 */
 function update_url_with_watermark(
  watermark_text,
  watermark_position, 
  watermark_color, 
  watermark_opacity,
  selector, 
  t_text_width  = 200, 
  t_font_size   = 14, 
  t_margin      = 0, 
  l_text_width  = 800, 
  l_font_size   = 50, 
  l_margin      = 0, 
  m_text_width  = 400, 
  m_font_size   = 25, 
  m_margin      = 0
  ) {
  let all_img = document.querySelectorAll(selector);
  let all_img_link_t = [];
  let all_img_link_l = [];
  let all_img_link_m = [];

  all_img.forEach((img) => {
    all_img_link_t.push(img.src);
    all_img_link_l.push(img.dataset.imageLargeSrc);
    all_img_link_m.push(img.dataset.imageMediumSrc);
  });

  get_watermark_links(watermark_text, watermark_position, watermark_color, watermark_opacity, all_img_link_l, l_text_width, l_font_size, l_margin, all_img, 'l');
  get_watermark_links(watermark_text, watermark_position, watermark_color, watermark_opacity, all_img_link_m, m_text_width, m_font_size, m_margin, all_img, 'm');
  get_watermark_links(watermark_text, watermark_position, watermark_color, watermark_opacity, all_img_link_t, t_text_width, t_font_size, t_margin, all_img, 't');
}

/**
 * 
 * @param {string} watermark_text 
 * @param {string} watermark_position 
 * @param {string} watermark_color 
 * @param {number} watermark_opacity 
 * @param {array} tab_links 
 * @param {number} text_Width 
 * @param {number} text_Size 
 */
function get_watermark_links(
  watermark_text,
  watermark_position, 
  watermark_color, 
  watermark_opacity,
  tab_links, 
  text_Width, 
  text_Size, 
  add_margin, 
  all_images_list, 
  src
  ) {
  var inputImages = tab_links;

  var outputImages = [];

  
  $.each(inputImages, function (i, v) {
    $('<img>', {
      src: v
    }).watermark({
      text: watermark_text,
      textWidth: text_Width,
      textSize: text_Size,
      textColor: watermark_color,
      textBg: 'rgba(0, 0, 0, 0)',
      gravity: watermark_position,
      opacity: watermark_opacity,
      margin: add_margin,
      done: function (imgURL) {
        outputImages[i] = imgURL;
        if (i + 1 === inputImages.length) {
          defer.resolve();
        }
      }
    });
  });
  
  var defer = $.Deferred();
  $.when(defer).done(function () {
    all_images_list.forEach((img,key) => {
      switch (src) {
        case 'l':
          img.dataset.imageLargeSrc = outputImages[key];
          break;     
        case 'm':
          img.dataset.imageMediumSrc = outputImages[key];
          break;     
        case 't':
          img.src = outputImages[key];
          break;     
        default:
          break;
      }
    });
  });
}