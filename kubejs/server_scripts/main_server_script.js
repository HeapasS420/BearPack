// priority: 1
"use strict";

ServerEvents.recipes(event => {
  registerActuallyAdditionsRecipes(event)
  registerBearCraftRecipes(event)
  registerExtendedAE2Recipes(event)
  registerSilentGemsRecipes(event)
})

ServerEvents.tags('item', event => {
  registerActuallyAdditionsItemTags(event)
  registerSilentGemsItemTags(event)
})
