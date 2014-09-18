<?php
/**
 * Plugin Name: hibrido google maps
 * Short Name: hgm
 * Plugin URI: http://www.souhibrido.com.br/
 * Description: facilitar a integração de um google maps com triggers
 * Version: 0.1.0
 * Author: hibrido
 * Author URI: http://www.souhibrido.com.br/
 * License: GPL
 */

// protection
if ( ! defined('ABSPATH')) {
    die;
}

// text domain
load_plugin_textdomain('hgm', false, dirname(plugin_basename(__FILE__)) . '/languages/');

// main class
require_once __DIR__ . '/includes/hgm.class.php';

// não carregamos a classe em uma váriavel global, pois,
// vamos deixar que ela seja iniciada somente nas páginas
// que realmente irão utiliza-las