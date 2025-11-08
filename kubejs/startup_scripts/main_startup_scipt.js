// priority: 0
"use strict";

StartupEvents.registry('item', event => {
  registerBearCraftItems(event)
  registerExtendedAEItems(event)
})

Platform.mods.kubejs.name = "BearCraft";
