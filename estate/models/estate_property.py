# -*- coding: utf-8 -*-
from odoo import api, fields, models
from odoo.release import description


class EstateProperty(models.Model):
    """ This model represents estate.property."""
    _name = 'estate.property'
    _description = 'EstateProperty'

    name = fields.Char(string='Customer Name', required=True)
    description = fields.Text(string='Description')
    postcode = fields.Char(string='')
    date_availability = fields.Date(string='')
    expected_price = fields.Float(string='', digits=(16, 2) , required=True)
    selling_price = fields.Float(string='', digits=(16, 2))
    bedrooms = fields.Integer(string='')
    living_area = fields.Integer(string='')
    facades = fields.Integer(string='')
    garage = fields.Boolean(string='Active')
    garden = fields.Boolean(string='Active')
    garden_area = fields.Integer(string='')
    garden_orientation = fields.Selection([
        ('north', 'North'),
        ('south', 'South'),
        ('east', 'East'),
        ('west', 'West'),
    ], string='Status', default='draft')
