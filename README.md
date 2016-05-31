# EasyExpressions

Easily add and manipulate some common whiz-bang animation expressions thru a GUI in Adobe After Effects.

The current library of expressions is based on [this collection.](https://www.youtube.com/watch?v=u4aN7qSWw6Y) Special thanks to Philomena Vasquez for offering [the original expressions project file for download.](https://dl.dropboxusercontent.com/u/10420220/Blog/Expressions.zip)

I've just taken the expressions, modified them to work as strings, and written a simple ExtendScript interface to make adding them pretty painless. This tool is intended for those who don't want to muck around with ExtendScript to implement some great animation expressions.

## Installation

Both files (EasyExpressions.jsx and expressions.jsxinc) need to be in the ScriptUI folder for Adobe After Effects. [Learn more about installing ScriptUIs.](https://helpx.adobe.com/after-effects/using/scripts.html)

To keep the scripts up to date, copy the repo to your machine, and then create alias files in your ScriptUI folder.

## Use

In After Effects, open the panel through the WINDOW menu. Custom ScriptUIs are found at the bottom. You can dock the panel or keep it free floating.



To add an expression, select a layer in your composition, adjust the slider values, and then click the appropriate button. You should see the expression added to the respective property (position, rotation, or scale). Currently, you can't choose the affected property - they're preselected in the functions.

You can of course apply more than one expression to a layer, so you can add expressions to a layer's position, rotation, and scale. You cannot, however, apply multiple expressions to the same property. E.g., a new position expression will override the current position expression.

The INERTIA/DECAY and BOUNCE functions require 2 keyframes to work. The function will apply to the keyframes nearest to the Time Indicator.
