---
sidebar_position: 5
---

# Classes

Classes are compiled Java/Kotlin files that wraps some functions, fields, constructors ( used to instantiate/create the class ), etc..
Rapid allows accessing the functions and constructors of classes to extend the scope of the development outside the built-in blocks.
By default, Rapid provides access to ALL the classes of: Java (ex.: java.lang.), android (ex.: android.widget.), appinventor (ex.: com.google.appinventor.components.runtime.util.), and even pre-added libraries that are available in appinventor (ex.: androidx.)
You could also include new classes from 3rd party JARs by [importing a library](libraries.md)
## Import Your First Class
Rapid makes it easy to import class you want, just by searching any part of its name. You don't have to memorize or copy the whole class name (Ex.: java.lang.String) since you could just search for (String)!

There are two ways to import a class:
- From the blocks' editor:
Right-click on the blocks editor and select 'Import Class' from the menu
- From the project options
Open the project options from (Project -> Options) then select the Classes tab and click 'Import Class'

In the search bar, type the name of the class you would like to import, in this guide, we will import the TextView class (a class in the Android package) that displays a text on the screen (used by the Label component)

Choose the class you are searching for from the results available, and click the Import button.
That's it. You should find the class name in the toolbox containing all methods and constructors of the class.
