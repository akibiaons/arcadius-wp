'use strict';

/**
 * product-model service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product-model.product-model');
