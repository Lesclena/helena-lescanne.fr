/* global app:true */
'use strict';

var app = angular
  .module('divonaContactApp', [
    'ngResource'
  ])
  .constant('MANDRILL_URL', 'https://mandrillapp.com/api/1.0/')
  .constant('MANDRILL_APIKEY', '_TUOZZXPVEaaRNfgh5s_KA')
  .constant('CONTACT_TO', 'magiccyril@gmail.com')
  .constant('CONTACT_SUBJECT', 'Contact');
