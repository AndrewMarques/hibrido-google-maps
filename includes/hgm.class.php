<?php

class HGM
{
    /**
     * plugin version
     */
    private static $version = '0.1.0';

    /**
     * init function.
     *
     * @access public
     * @return void
     */
    public static function init()
    {
        // enqueue scripts
        add_action('wp_enqueue_scripts', array(__CLASS__, 'scripts'));
    }

    /**
     * scripts function.
     *
     * @access public
     * @return void
     */
    public static function scripts()
    {
        // dependencies scripts
        wp_register_script('hgm_api', '//maps.googleapis.com/maps/api/js', array(), static::$version, true);
        wp_enqueue_script('hgm_main', plugin_dir_url(__DIR__) . 'assets/js/main.js', array('hgm_api'), static::$version, true);
    }
}
