# Change Log

## [8.5.0] - 2023-xx-xx

### ✨ New features

- [#424](https://github.com/estruyf/vscode-front-matter/issues/424): Snippet wrapping to allow easier updates or changes to previously set snippets in the content
- [#585](https://github.com/estruyf/vscode-front-matter/issues/585): New content relationship field type (`contentRelationship`)

### 🎨 Enhancements

- [#558](https://github.com/estruyf/vscode-front-matter/issues/558): Moved the tags and categories to a `.frontmatter/database/taxonomyDb.json` file
- [#566](https://github.com/estruyf/vscode-front-matter/issues/566): Keep the panel context on the live preview
- [#568](https://github.com/estruyf/vscode-front-matter/issues/568): Update the preview URL if the slug changes
- [#586](https://github.com/estruyf/vscode-front-matter/issues/586): Allow to specify the content card fields
- [#588](https://github.com/estruyf/vscode-front-matter/issues/588): Added extensibility support to override card fields
- [#591](https://github.com/estruyf/vscode-front-matter/issues/591): Support for date format in the `datetime` field
- [#593](https://github.com/estruyf/vscode-front-matter/issues/593): Add support for date formatting in the preview path

### ⚡️ Optimizations

- [#584](https://github.com/estruyf/vscode-front-matter/issues/584): - Ignore type field in content-type validation

### 🐞 Fixes

- [#564](https://github.com/estruyf/vscode-front-matter/issues/564): Fix to only pass strings to the taxonomy dashboard
- [#567](https://github.com/estruyf/vscode-front-matter/issues/567): Fix taxonomy filters that are incorrectly positioned
- [#572](https://github.com/estruyf/vscode-front-matter/issues/572): Fix the media snippet placeholder link
- [#577](https://github.com/estruyf/vscode-front-matter/issues/577): Fix in the `dataFile` field where data entries get overwritten
- [#590](https://github.com/estruyf/vscode-front-matter/issues/590): Fix for image fields inside a sub-block
- [#595](https://github.com/estruyf/vscode-front-matter/issues/595): Fix for media metadata now showing up
- [#596](https://github.com/estruyf/vscode-front-matter/issues/596): Fix for number field in block data

## [8.4.0] - 2023-04-03 - [Release notes](https://beta.frontmatter.codes/updates/v8.4.0)

### 🧪 Experimental features

- External UI script support for dashboards
- Visual Studio Code Theming support for the dashboards
- Front matter AI 🤖

> **Info**: To enable the experimental features you need to set the `frontMatter.experimental` setting to `true`.

### 🙏 Exclusive Features for Sponsors

We're excited to announce a brand new feature exclusively available to sponsors of Front Matter CMS. With this update, we've added Front Matter AI to the project, which provides helpful suggestions for creating new content such as title suggestions and tag/category suggestions.

> **Important**: To access the Front Matter AI feature, you will need to sign-in ([backers & supports sign-in instructions](https://frontmatter.codes/docs/getting-started#backers-&-supporters)) and set the `frontMatter.sponsors.ai.enabled` setting to `true` and you're good to go! We put it behind a setting to not automatically enable it and let you decide if you want to use it or not.

If you're not already a sponsor, now is a great time to consider supporting the project. By becoming a sponsor, you not only gain access to exclusive features like Front Matter AI, but also help to support the ongoing development and maintenance of the project. You can become a sponsor by visiting the [GitHub sponsor page](https://github.com/sponsors/estruyf).

### ✨ New features

- [#363](https://github.com/estruyf/vscode-front-matter/issues/363): Multiline support for the `string` field in data view
- [#513](https://github.com/estruyf/vscode-front-matter/issues/513): Added support for external UI scripts to add custom HTML on the dashboard elements
- [#530](https://github.com/estruyf/vscode-front-matter/issues/530): Implementation of the Front Matter AI 🤖 powered by [mendable.ai](https://mendable.ai)
- [#537](https://github.com/estruyf/vscode-front-matter/issues/537): Allow to use the root path `/` as the public folder
- [#541](https://github.com/estruyf/vscode-front-matter/issues/541): Added title AI suggestions for GitHub sponsors
- [#548](https://github.com/estruyf/vscode-front-matter/issues/548): Project selection support when working in mono-repos or multi-root workspaces
- [#550](https://github.com/estruyf/vscode-front-matter/issues/550): Added taxonomy (tags/categories) AI suggestions for GitHub sponsors

### 🎨 Enhancements

- Added an `unknown` field for uniforms when it has no type defined
- [#512](https://github.com/estruyf/vscode-front-matter/issues/512): Added the `jsonc` file association for the `frontMatter.json` file. That way, you can use comments in the file.
- [#522](https://github.com/estruyf/vscode-front-matter/issues/522): Configuration support added for [Astro](https://astro.build)
- [#523](https://github.com/estruyf/vscode-front-matter/issues/523): Added support for `floating`/`decimal` numbers with a new number field property called `numberOptions`
- [#524](https://github.com/estruyf/vscode-front-matter/issues/524): Removed the **Global settings** view from the panel. You can still get it back by configuring a [custom view mode](https://frontmatter.codes/docs/panel#view-modes).
- [#535](https://github.com/estruyf/vscode-front-matter/issues/535): Retain the scroll position after selecting a media file
- [#538](https://github.com/estruyf/vscode-front-matter/issues/538): Added support to encode emojis in the string field
- [#549](https://github.com/estruyf/vscode-front-matter/issues/549): Git submodule support to sync changes
- [#554](https://github.com/estruyf/vscode-front-matter/issues/554): When inserting snippets, only the content snippets will be shown

### ⚡️ Optimizations

- [#534](https://github.com/estruyf/vscode-front-matter/issues/534): Moved the `mediaDb.json` file to a `.frontmatter/database` folder instead of the `.frontmatter/content` folder
- [#536](https://github.com/estruyf/vscode-front-matter/issues/536): Set the start location from the script to the root of the workspace
- [#555](https://github.com/estruyf/vscode-front-matter/issues/555): When generating a content-type from existing content, Front Matter will better detect the type of field
- [#556](https://github.com/estruyf/vscode-front-matter/issues/556): Content values are aligned to the type of field

### 🐞 Fixes

- [#518](https://github.com/estruyf/vscode-front-matter/issues/518): Fix an issue where the `YAML` parser adds line breaks to long strings
- [#520](https://github.com/estruyf/vscode-front-matter/issues/520): Add the URL protocol to the host on opening the preview if it's missing
- [#521](https://github.com/estruyf/vscode-front-matter/issues/521): Fix empty snippets dashboard placeholder
- [#526](https://github.com/estruyf/vscode-front-matter/issues/526): Fix card content menu
- [#528](https://github.com/estruyf/vscode-front-matter/issues/528): Fix where the `.astro` code section `---` is seen as front matter
- [#529](https://github.com/estruyf/vscode-front-matter/issues/529): Fix YAML parsing in Windows which added an extra carriage return
- [#531](https://github.com/estruyf/vscode-front-matter/issues/531): Fix prettier update which caused data views to not render list items
- [#539](https://github.com/estruyf/vscode-front-matter/issues/539): Fix the override of the default file prefix on content creation
- [#543](https://github.com/estruyf/vscode-front-matter/issues/543): Fix JSON schema for script commands
- [#547](https://github.com/estruyf/vscode-front-matter/issues/547): Fix setting default value in a hidden group field (`block`)
- [#552](https://github.com/estruyf/vscode-front-matter/issues/552): Fix for content retrieval in multi-root workspaces
- [#557](https://github.com/estruyf/vscode-front-matter/issues/557): Fix for dropdown of the tag picker

## [8.3.0] - 2023-02-14 - [Release notes](https://beta.frontmatter.codes/updates/v8.3.0)

### 🧪 Experimental features

- Visual Studio Code Theming support for the dashboards

> **Info**: To enable the experimental features you need to set the `frontMatter.experimental` setting to `true`.

### ✨ New features

- [#407](https://github.com/estruyf/vscode-front-matter/issues/407): External config support

### 🎨 Enhancements

- [#425](https://github.com/estruyf/vscode-front-matter/issues/425): Added support for placeholders in the content paths and previews
- [#473](https://github.com/estruyf/vscode-front-matter/issues/473): Allow setting the SEO title name with the `frontMatter.taxonomy.seoTitleField` setting
- [#474](https://github.com/estruyf/vscode-front-matter/issues/474): Allow to define the file prefix on content types
- [#484](https://github.com/estruyf/vscode-front-matter/issues/484): Support for overriding scripts per environment type
- [#494](https://github.com/estruyf/vscode-front-matter/issues/494): Support for external image URLs in previews
- [#497](https://github.com/estruyf/vscode-front-matter/issues/497): Support for movie media previews in the content dashboard
- [#502](https://github.com/estruyf/vscode-front-matter/issues/502): Keyboard bindings added to open dashboard, insert media, and insert snippet
- [#503](https://github.com/estruyf/vscode-front-matter/issues/503): Allow making changes to the preview URL in the webview
- [#504](https://github.com/estruyf/vscode-front-matter/issues/504): Allow specifying the filename for your page bundles
- [#505](https://github.com/estruyf/vscode-front-matter/issues/505): Experimental Visual Studio Code theming support

### ⚡️ Optimizations

- [#496](https://github.com/estruyf/vscode-front-matter/issues/496): Make use of the `storageUri` and `globalStorageUri` for storing larger states

### 🐞 Fixes

- [#469](https://github.com/estruyf/vscode-front-matter/issues/469): Fix for using the root folder as content folder
- [#470](https://github.com/estruyf/vscode-front-matter/issues/470): Fix `initialize project` dashboard description
- [#480](https://github.com/estruyf/vscode-front-matter/issues/480): Updated _add missing fields_ label to _add missing fields to content-type_
- [#482](https://github.com/estruyf/vscode-front-matter/issues/482): Update the description when you want to overwrite the default content type description
- [#488](https://github.com/estruyf/vscode-front-matter/issues/488): Fix an issue where the `.frontmatter` folder gets created before initializing the project
- [#493](https://github.com/estruyf/vscode-front-matter/issues/493): Fix an issue where a custom placeholder value is replaced by an `array` instead of a `string`

## [8.2.0] - 2022-12-08 - [Release notes](https://beta.frontmatter.codes/updates/v8.2.0)

### ✨ New features

- [#362](https://github.com/estruyf/vscode-front-matter/issues/362): Support for conditional metadata
- [#412](https://github.com/estruyf/vscode-front-matter/issues/412): Allow `frontmatter.json` to be split in multiple files

### 🎨 Enhancements

- [#360](https://github.com/estruyf/vscode-front-matter/issues/360): Define which content types can be used on your page folders
- [#406](https://github.com/estruyf/vscode-front-matter/issues/406): Added support for single data entries in the data dashboard
- [#428](https://github.com/estruyf/vscode-front-matter/issues/428): Improved UX for inserting images to your content
- [#430](https://github.com/estruyf/vscode-front-matter/issues/430): Support for HEXO its `post_asset_folder` setting (image location)
- [#434](https://github.com/estruyf/vscode-front-matter/issues/434): Webview errors are logged in the extension output
- [#440](https://github.com/estruyf/vscode-front-matter/issues/440): Type to search/filter in the snippets dashboard
- [#447](https://github.com/estruyf/vscode-front-matter/issues/447): Allow to use placeholders on git commit messages
- [#449](https://github.com/estruyf/vscode-front-matter/issues/449): Show `filename` if the `title` is not set
- [#450](https://github.com/estruyf/vscode-front-matter/issues/450): Additional time placeholders added `{{hour12}}`, `{{hour24}}`, `{{ampm}}`, and `{{minute}}`
- [#458](https://github.com/estruyf/vscode-front-matter/issues/458): Ability to configure the file prefix on folder level

### ⚡️ Optimizations

- [#431](https://github.com/estruyf/vscode-front-matter/issues/431): Performance improvements for the content dashboard
- [#448](https://github.com/estruyf/vscode-front-matter/issues/448): Retrieving files fails when content folder name and workspace folder name are the same
- [#455](https://github.com/estruyf/vscode-front-matter/issues/455): Show a description for the SEO section when title nor description is set

### 🐞 Fixes

- Fix field error message color
- [#433](https://github.com/estruyf/vscode-front-matter/issues/433): Fix issue with rendering an incorrect title value on the content dashboard
- [#462](https://github.com/estruyf/vscode-front-matter/issues/462): Fix issue in script error notification
- [#465](https://github.com/estruyf/vscode-front-matter/issues/465): Deleted content does not get added in git when syncing
- [#471](https://github.com/estruyf/vscode-front-matter/issues/471): Fix typo on data dashboard

## [8.1.2] - 2022-10-06

### 🐞 Fixes

- [#435](https://github.com/estruyf/vscode-front-matter/issues/435): Fix required fields text color
- [#436](https://github.com/estruyf/vscode-front-matter/issues/436): Fix inserting image/video snippets without defined fields

## [8.1.1] - 2022-09-23

### 🐞 Fixes

- [#422](https://github.com/estruyf/vscode-front-matter/issues/422): Fix in panel initialization logic

## [8.1.0] - 2022-09-22 - [Release notes](https://beta.frontmatter.codes/updates/v8.1.0)

### ✨ New features

- [#369](https://github.com/estruyf/vscode-front-matter/issues/369): New `required` property to specify if a content-type field is required
- [#376](https://github.com/estruyf/vscode-front-matter/issues/376): Ability to run scripts after content was created
- [#377](https://github.com/estruyf/vscode-front-matter/issues/377): Git sync actions added on panel and content dashboard (pull and push your changes to remote)
- [#379](https://github.com/estruyf/vscode-front-matter/issues/377): New `frontMatter.config.reload` command to reload the configuration file + reinitialize its listeners
- [#391](https://github.com/estruyf/vscode-front-matter/issues/391): New `description` property to show a message underneath the input field
- [#401](https://github.com/estruyf/vscode-front-matter/issues/401): Content dashboard now has pagination enabled and can be disabled via the `frontMatter.dashboard.content.pagination` setting

### 🎨 Enhancements

- [#352](https://github.com/estruyf/vscode-front-matter/issues/352): Custom placeholders now support scripting
- [#370](https://github.com/estruyf/vscode-front-matter/issues/370): Define the tags and categories as reserved keywords for custom taxonomy
- [#372](https://github.com/estruyf/vscode-front-matter/issues/372): Rename Taxonomy tab to Taxonomies
- [#374](https://github.com/estruyf/vscode-front-matter/issues/374): Hide the front matter section to use the panel instead
- [#383](https://github.com/estruyf/vscode-front-matter/issues/383): Add the item menu to the content list view
- [#385](https://github.com/estruyf/vscode-front-matter/issues/385): If no default value for the draft field is defined, the field value will be set to `true`
- [#388](https://github.com/estruyf/vscode-front-matter/issues/388): New stop server action has been added to the panel
- [#390](https://github.com/estruyf/vscode-front-matter/issues/390): Implement another JSON parser in order to be able to parse the `frontmatter.json` file better
- [#394](https://github.com/estruyf/vscode-front-matter/issues/394): Ordering of snippet fields is based on their field definition
- [#395](https://github.com/estruyf/vscode-front-matter/issues/395): Added support for custom snippet fields on media snippets
- [#402](https://github.com/estruyf/vscode-front-matter/issues/402): Custom sorting of content now supports `number` fields
- [#417](https://github.com/estruyf/vscode-front-matter/issues/417): New `hyperlink` wysiwyg option
- [#418](https://github.com/estruyf/vscode-front-matter/issues/418): New `heading` and `divider` fields for your content-type definition

### ⚡️ Optimizations

- Internal post message optimizations to the webviews
- Preview tab now shows the title of the page/content if present

### 🐞 Fixes

- [#378](https://github.com/estruyf/vscode-front-matter/issues/378): Fix last modified update only to content in content folders
- [#384](https://github.com/estruyf/vscode-front-matter/issues/384): Fix issue `title` field in sub-fields
- [#393](https://github.com/estruyf/vscode-front-matter/issues/393): Fix Windows file path for retrieving the preview path
- [#396](https://github.com/estruyf/vscode-front-matter/issues/396): Fix for `index` and `_index` page previews
- [#398](https://github.com/estruyf/vscode-front-matter/issues/398): Fix Windows folder path parsing in data folder retrieval
- [#400](https://github.com/estruyf/vscode-front-matter/issues/400): Fix for draft/published content grouping
- [#403](https://github.com/estruyf/vscode-front-matter/issues/403): Fix for media files with spaces on importing in article content
- [#404](https://github.com/estruyf/vscode-front-matter/issues/404): Fix for published sorting option in media dashboard
- [#408](https://github.com/estruyf/vscode-front-matter/issues/408): Fix for missing `dashboard.taxonomy.view` view mode in the JSON schema

## [8.0.1] - 2022-07-13

### 🐞 Fixes

- Fix `PSD` media card icon image
- Fix missing clipboard icon for the media card action
- Fix in tags rendering on content cards

## [8.0.0] - 2022-07-11 - [Release notes](https://beta.frontmatter.codes/updates/v8.0.0)

### ✨ New Features

- [#291](https://github.com/estruyf/vscode-front-matter/issues/291): New taxonomy dashboard for managing tags, categories, and custom taxonomies

### 🎨 Enhancements

- Ignore the SEO `keywords` field for missing content type field
- [#307](https://github.com/estruyf/vscode-front-matter/issues/307): New `list` field which allows to create a list of items
- [#345](https://github.com/estruyf/vscode-front-matter/issues/345): Media dashboard UI improvements to visualize the content and public folders
- [#349](https://github.com/estruyf/vscode-front-matter/issues/349): New `slug` field which allows you to manage the slug of your post from the Front Matter panel
- [#350](https://github.com/estruyf/vscode-front-matter/issues/350): New `previewPath` property for the `frontMatter.content.pageFolders` setting. This allows you to specify a section prefix for all content created in that directory.
- [#351](https://github.com/estruyf/vscode-front-matter/issues/351): New `template` property for content types which allows you to combine templates and content types for content creation
- [#353](https://github.com/estruyf/vscode-front-matter/issues/353): Add the default content type on project initialization
- [#366](https://github.com/estruyf/vscode-front-matter/issues/366): Better support for using block fields in another block field

### 🐞 Fixes

- [#348](https://github.com/estruyf/vscode-front-matter/issues/348): Fix media dashboard breadcrumb when multiple page folders are in use
- [#356](https://github.com/estruyf/vscode-front-matter/issues/356): Re-introduce the `labelField` to the `frontMatter.taxonomy.fieldGroups` setting
- [#358](https://github.com/estruyf/vscode-front-matter/issues/358): Fix for relative path of the public folder
- [#364](https://github.com/estruyf/vscode-front-matter/issues/364): Honour file ending rules in data files
- [#365](https://github.com/estruyf/vscode-front-matter/issues/365): Show spinner on the initial load of the content dashboard

## [7.3.4] - 2022-06-13

### 🐞 Fixes

- [#354](https://github.com/estruyf/vscode-front-matter/issues/354): Fix Windows file path parsing for inserting media files

## [7.3.3] - 2022-06-11

### 🐞 Fixes

- Card render when taxonomy is not an array value
- Double pages on contents dashboard

## [7.3.2] - 2022-06-01

### 🐞 Fixes

- [#346](https://github.com/estruyf/vscode-front-matter/issues/346): Fix media dashboard refresh action

## [7.3.1] - 2022-05-26

### 🐞 Fixes

- [#343](https://github.com/estruyf/vscode-front-matter/issues/343): Fix in the schema for the `frontMatter.taxonomy.fieldGroups` setting

## [7.3.0] - 2022-05-25 - [Release notes](https://beta.frontmatter.codes/updates/v7.3.0)

### 🎨 Enhancements

- JSON schema enhancements for working with data files
- [#330](https://github.com/estruyf/vscode-front-matter/issues/330): Allow custom scripts to easily update front matter
- [#331](https://github.com/estruyf/vscode-front-matter/issues/331): Added functionality to run other type of scripts
- [#332](https://github.com/estruyf/vscode-front-matter/issues/332): New `dataFile` field which allows you to create data file references
- [#333](https://github.com/estruyf/vscode-front-matter/issues/333): Automatically mark Jekyll posts in `_drafts` folder as draft
- [#335](https://github.com/estruyf/vscode-front-matter/issues/335): Merge media snippets with content snippets to allow you to define multiple media snippets and use these in your content
- [#336](https://github.com/estruyf/vscode-front-matter/issues/336): Support added for inverting the draft field so that SSGs/authors can use a published field instead
- [#337](https://github.com/estruyf/vscode-front-matter/issues/337): Allow multiple front matter types to be used
- [#338](https://github.com/estruyf/vscode-front-matter/issues/338): Ability to disable the templates functionality (default is disabled)
- [#340](https://github.com/estruyf/vscode-front-matter/issues/340): Show an error message when there is a content folder registered that does not exist in the project

### 🐞 Fixes

- [#334](https://github.com/estruyf/vscode-front-matter/issues/334): Fix for locked content folders retrieval
- [#339](https://github.com/estruyf/vscode-front-matter/issues/339): Fix for content folders without a title

## [7.2.0] - 2022-05-02 - [Release notes](https://beta.frontmatter.codes/updates/v7.2.0)

### 🎨 Enhancements

- New tag design for the tags, category, and taxonomy fields
- [#263](https://github.com/estruyf/vscode-front-matter/issues/263): WYSIWYG string field option
- [#308](https://github.com/estruyf/vscode-front-matter/issues/308): New `File` field
- [#314](https://github.com/estruyf/vscode-front-matter/issues/314): New preview actions to open the page in the browser and refresh the preview
- [#322](https://github.com/estruyf/vscode-front-matter/issues/322): Show parent folder name when file is an index page (`index.md` / `_index.md`)
- [#323](https://github.com/estruyf/vscode-front-matter/issues/323): Added 11ty, jekyll, and docusaurus to the framework selection list
- [#325](https://github.com/estruyf/vscode-front-matter/issues/325): Better welcome experience that allows you to add content folders straight from the welcome view
- [#326](https://github.com/estruyf/vscode-front-matter/issues/326): Content type actions to create, update, or set according to the current file

### ⚡️ Optimizations

- [#316](https://github.com/estruyf/vscode-front-matter/issues/316): Suppress file parsing errors when closing the dashboard

### 🐞 Fixes

- Updated JSON schema link to supported version by VS Code (draft-07)
- Hide the view mode action from the Front Matter panel if no custom modes are defined
- Fix in decode base64 uploaded video files
- Fix for a lightbox on other types of documents (pdf, etc.)
- Fix for hiding the image preview on slide-over for none image documents
- [#324](https://github.com/estruyf/vscode-front-matter/issues/324): Fix for the framework selection on the welcome screen

## [7.1.2] - 2022-04-11

### 🐞 Fixes

- [#315](https://github.com/estruyf/vscode-front-matter/issues/315): Fix draft tab navigation

## [7.1.1] - 2022-04-08

### 🐞 Fixes

- Fix in menu item with `stopPropagation` not defined.

## [7.1.0] - 2022-04-07 - [Release notes](https://beta.frontmatter.codes/updates/v7.1.0)

### 🎨 Enhancements

- [#240](https://github.com/estruyf/vscode-front-matter/issues/240): Capability added to define display modes
- [#246](https://github.com/estruyf/vscode-front-matter/issues/246): Support to add multiple tags/keywords/taxonomy via comma separated values
- [#293](https://github.com/estruyf/vscode-front-matter/issues/293): Support added for setting preview images in block fields
- [#294](https://github.com/estruyf/vscode-front-matter/issues/294): Full-text search allows you to search through all your page content
- [#297](https://github.com/estruyf/vscode-front-matter/issues/297): SEO Keywords input got moved to the SEO section
- [#301](https://github.com/estruyf/vscode-front-matter/issues/301): Show tags on the content cards
- [#303](https://github.com/estruyf/vscode-front-matter/issues/303): Content card actions to quickly view, delete, or run custom scripts
- [#310](https://github.com/estruyf/vscode-front-matter/issues/310): Supported mime types for media dashboard

### ⚡️ Optimizations

- [#296](https://github.com/estruyf/vscode-front-matter/issues/296): Loading optimization of the content dashboard

### 🐞 Fixes

- [#302](https://github.com/estruyf/vscode-front-matter/issues/302): Fix for spinner when navigating between tabs
- [#304](https://github.com/estruyf/vscode-front-matter/issues/304): Fix yaml stringify which caused additional fields to be added
- [#305](https://github.com/estruyf/vscode-front-matter/issues/305): Fix for overflow issue in taxonomy picker
- [#306](https://github.com/estruyf/vscode-front-matter/issues/306): Fix for default value of content type fields
- [#311](https://github.com/estruyf/vscode-front-matter/issues/311): Fix for updating snippets

## [7.0.0] - 2022-03-21 - [Release notes](https://beta.frontmatter.codes/updates/v7.0.0)

### ✨ New Features

- [#175](https://github.com/estruyf/vscode-front-matter/issues/175): New snippet support + dashboard
- [#281](https://github.com/estruyf/vscode-front-matter/issues/281): New `isPublishDate` and `isModifiedDate` datetime field properties

### 🎨 Enhancements

- Light color theme enhancements to media cards
- Light color theme enhancements to folder cards
- Added collapse and dashboard button to the view title of the FM Panel
- Show content commands only when a supported file type is active
- Added `{{year}}`, `{{month}}`, and `{{day}}` placeholders for fields
- [#272](https://github.com/estruyf/vscode-front-matter/issues/272): New slide over panel for showing details of media files
- [#276](https://github.com/estruyf/vscode-front-matter/issues/276): Add a Front Matter walkthrough for VS Code
- [#270](https://github.com/estruyf/vscode-front-matter/issues/270): Only show media files from public folder if `pageBundle` is not enabled on any of the content types
- [#282](https://github.com/estruyf/vscode-front-matter/issues/282): Insert relative paths for media files located in a page bundle (also sub-folders)
- [#283](https://github.com/estruyf/vscode-front-matter/issues/283): Added published date sorting options for the content dashboard
- [#286](https://github.com/estruyf/vscode-front-matter/issues/286): Refresh button added for the content page
- [#287](https://github.com/estruyf/vscode-front-matter/issues/287): Show folder name on `index.md` files for recently modified files
- [#292](https://github.com/estruyf/vscode-front-matter/issues/292): Lower fuzzy search threshold for the content dashboard

### 🐞 Fixes

- [#279](https://github.com/estruyf/vscode-front-matter/issues/279): Fix for content dashboard updates for all registered types
- [#280](https://github.com/estruyf/vscode-front-matter/issues/280): Fix to not automatically set dates on new files that do not contain front matter
- [#284](https://github.com/estruyf/vscode-front-matter/issues/284): Show the WYSIWYG controls on all supported file types
- [#290](https://github.com/estruyf/vscode-front-matter/issues/290): Fix for onDidChangeTextEditorSelection listener sending metadata updates

## [6.1.1] - 2022-03-02

### 🐞 Fixes

- [#275](https://github.com/estruyf/vscode-front-matter/issues/275): Fix for rendering the panel when content contains an invalid markdown syntax tree

## [6.1.0] - 2022-02-28 - [Release notes](https://beta.frontmatter.codes/updates/v6.1.0)

### ✨ New features

- [#176](https://github.com/estruyf/vscode-front-matter/issues/176): New `block` field type that allows you to you to define a group of fields which can be used to create a list of data

### 🎨 Enhancements

- Updated the activity bar icon for better visibility
- Storing the panel collapse section states
- [#241](https://github.com/estruyf/vscode-front-matter/issues/241): Added taxonomy limit field property which allows you to limit the number of selections
- [#242](https://github.com/estruyf/vscode-front-matter/issues/242): Keep comments at the root of the front matter
- [#248](https://github.com/estruyf/vscode-front-matter/issues/248): Added support for front matter highlighting to all file types specified in `frontMatter.content.supportedFileTypes`
- [#255](https://github.com/estruyf/vscode-front-matter/issues/255): Added support for default values on block fields / data creation
- [#257](https://github.com/estruyf/vscode-front-matter/issues/257): Allow preview images to be used in multi-dimensional fields
- [#271](https://github.com/estruyf/vscode-front-matter/issues/271): Added image size placeholders for media snippets

### ⚡️ Optimizations

- Show the data item its details when clicking on the record
- Refactoring of the explorer view panel listeners
- Added `{{now}}` placeholder to the publishing date for content creation
- [#243](https://github.com/estruyf/vscode-front-matter/issues/243): Refactoring front matter parsing

### 🐞 Fixes

- [#247](https://github.com/estruyf/vscode-front-matter/issues/247): Fix the front matter highlighting in markdown documents
- [#261](https://github.com/estruyf/vscode-front-matter/issues/261): Fix to allow that tag and category fields can be renamed
- [#264](https://github.com/estruyf/vscode-front-matter/issues/264): Fix for Windows paths on content folder registration
- [#268](https://github.com/estruyf/vscode-front-matter/issues/268): Fix for panel which only shows loading indicator

## [6.0.0] - 2022-01-25 - [Release Notes](https://beta.frontmatter.codes/updates/v6.0.0)

### ✨ New features

- [#193](https://github.com/estruyf/vscode-front-matter/issues/193): Support added for editing data files.
- [#197](https://github.com/estruyf/vscode-front-matter/issues/197): Support for multi-dimensional content type fields on content creation and editing.
- [#225](https://github.com/estruyf/vscode-front-matter/issues/225): Placeholder support for front matter field values (template and content type).
- [#226](https://github.com/estruyf/vscode-front-matter/issues/226): Ability to specify the local server start command and trigger it from the UI.
- [#227](https://github.com/estruyf/vscode-front-matter/issues/227): Specify the file types to support with the new `frontMatter.content.supportedFileTypes` setting.
- [#228](https://github.com/estruyf/vscode-front-matter/issues/228): Show bulk button actions in panel and dashboard view.
- [#231](https://github.com/estruyf/vscode-front-matter/issues/231): Once you authenticate via GitHub as a supporter, the support links will be hidden from the UI.

### 🎨 Enhancements

- Added default field value for content type fields
- HMR support for panel webview development
- Added reveal media file action
- [#187](https://github.com/estruyf/vscode-front-matter/issues/187): Svelte support with the [#227](https://github.com/estruyf/vscode-front-matter/issues/227) features has been added.
- [#198](https://github.com/estruyf/vscode-front-matter/issues/198): Additional media sort options (alt, caption, and size).
- [#230](https://github.com/estruyf/vscode-front-matter/issues/230): JSON front matter support added.
- [#233](https://github.com/estruyf/vscode-front-matter/issues/233): Partial update when a page is updated.

### 🐞 Fixes

- [#234](https://github.com/estruyf/vscode-front-matter/issues/234): Fix for multi-word keywords
- [#235](https://github.com/estruyf/vscode-front-matter/issues/235): Fix for reselecting the previously removed value from a choice field

## [5.10.0] - 2022-01-10

### 🎨 Enhancements

- [#218](https://github.com/estruyf/vscode-front-matter/issues/218): Add support for creating `mdx` files from templates and content types. This introduced a new setting: `frontMatter.content.defaultFileType`.
- [#220](https://github.com/estruyf/vscode-front-matter/issues/220): Add support DateTime updates in `mdx` files when the `mdx extension` is not installed.

### 🐞 Fixes

- [#221](https://github.com/estruyf/vscode-front-matter/issues/221): Automatic DateTime switch from on text change to on save to prevent multiple updates.

## [5.9.0] - 2022-01-01 - 🎇🎆

### 🎨 Enhancements

- Fixing the spinner which overlaps the global navigation bar
- Quick actions added for media files (edit, delete, insert markdown, insert snippet)
- [#199](https://github.com/estruyf/vscode-front-matter/issues/199): Search media files in the currently selected folder
- [#211](https://github.com/estruyf/vscode-front-matter/issues/211): Replace text selection on media inserts
- [#212](https://github.com/estruyf/vscode-front-matter/issues/212): Create folder watchers for content folders. When new content gets created, the dashboard updates.
- [#213](https://github.com/estruyf/vscode-front-matter/issues/213): New media folder overview design

### 🐞 Fixes

- [#210](https://github.com/estruyf/vscode-front-matter/issues/210): Fix for adding media files with uppercase file extensions
- [#214](https://github.com/estruyf/vscode-front-matter/issues/214): Fix for opening markdown file after creating it for the specified content type

## [5.8.0] - 2021-12-21 - 🎄

### 🎨 Enhancements

- Refactoring of the WebView logic to new message handlers
- Optimized the `getMedia` call from the webview
- Keep the dashboard its context when switching tabs
- [#205](https://github.com/estruyf/vscode-front-matter/issues/205): Define a logging level setting
- [#206](https://github.com/estruyf/vscode-front-matter/issues/206): Add front matter issues to the diagnostic tab

### 🐞 Fixes

- [#207](https://github.com/estruyf/vscode-front-matter/issues/207): Fix the quick picks for content creation
- [#208](https://github.com/estruyf/vscode-front-matter/issues/208): Fix for the collapse sections action so that it is not available everywhere, but only on the Front Matter panel

## [5.7.0] - 2021-12-07 - [Release Notes](https://beta.frontmatter.codes/updates/v5.7.0)

### 🎨 Enhancements

- [#188](https://github.com/estruyf/vscode-front-matter/issues/188): Support for `.markdown` files added to the dashboard
- [#190](https://github.com/estruyf/vscode-front-matter/issues/190): Diagnostic output for the extension
- [#194](https://github.com/estruyf/vscode-front-matter/issues/194): WYSIWYG controls added for markdown files + configuration to enable/disable the functionality

### 🐞 Fixes

- [#191](https://github.com/estruyf/vscode-front-matter/issues/191): Fix beta settings page
- [#200](https://github.com/estruyf/vscode-front-matter/issues/200): Fix last modified date sorting for media files
- [#201](https://github.com/estruyf/vscode-front-matter/issues/201): Fix overflow issue with the media filename
- [#202](https://github.com/estruyf/vscode-front-matter/issues/202): Fix checkbox label color for light themes

## [5.6.0] - 2021-11-23

### 🎨 Enhancements

- Updated camera icon from VS Code to media icon
- Updated the media card actions to show it within a menu. This will give a better experience with custom scripts.
- [#97](https://github.com/estruyf/vscode-front-matter/issues/97): Custom Script support for media files and folders
- [#178](https://github.com/estruyf/vscode-front-matter/issues/178): Sorting added to the media dashboard
- [#179](https://github.com/estruyf/vscode-front-matter/issues/179): Updated the `open dashboard` icon to make it easier to spot it
- [#180](https://github.com/estruyf/vscode-front-matter/issues/180): Added `{filename}` as placeholder for media snippets
- [#181](https://github.com/estruyf/vscode-front-matter/issues/181): Support for custom taxonomy fields added

### 🐞 Fixes

- [#183](https://github.com/estruyf/vscode-front-matter/issues/183): Fix type error on the `frontMatter.content.sorting` setting

## [5.5.0] - 2021-11-15

As from this version onwards, the extension will be published to [open-vsx.org](https://open-vsx.org/).

### 🎨 Enhancements

- [#173](https://github.com/estruyf/vscode-front-matter/issues/173): Allow to specify your own sorting for the content dashboard
- [#174](https://github.com/estruyf/vscode-front-matter/issues/174): Added option to exclude sub-directories from page/markdown content retrieval

## [5.4.0] - 2021-11-05

### 🎨 Enhancements

- [#166](https://github.com/estruyf/vscode-front-matter/issues/166): Added preview button to the panel base view
- [#167](https://github.com/estruyf/vscode-front-matter/issues/167): Allow to set the preview path per content type

## [5.3.1] - 2021-10-29

### 🐞 Fixes

- [#163](https://github.com/estruyf/vscode-front-matter/issues/163): Setting workspace state instead of global state for the media view

## [5.3.0] - 2021-10-28 - [Release Notes](https://beta.frontmatter.codes/updates/v5.3.0)

### 🎨 Enhancements

- [#158](https://github.com/estruyf/vscode-front-matter/issues/158): Add support for non-boolean draft/publish status fields
- [#159](https://github.com/estruyf/vscode-front-matter/issues/159): Enhancements to SEO checks: Slug check, keyword details, more article information

### 🐞 Fixes

- Value check when generating slug from title
- Fix for date time formatting with `DD` and `YYYY` tokens
- Fix in tag space replacing when object is passed

## [5.2.0] - 2021-10-19

### 🎨 Enhancements

- [#151](https://github.com/estruyf/vscode-front-matter/issues/151): Detect which site-generator or framework is used
- [#152](https://github.com/estruyf/vscode-front-matter/issues/152): Automatically set setting based on the used site-generator or framework
- [#154](https://github.com/estruyf/vscode-front-matter/issues/154): Bulk script support added
- [#155](https://github.com/estruyf/vscode-front-matter/issues/155): Fallback image added for the images shown in the editor panel

### 🐞 Fixes

- [#153](https://github.com/estruyf/vscode-front-matter/issues/153): Support old date formatting for date-fns
- [#156](https://github.com/estruyf/vscode-front-matter/issues/156): Fix for uploading media files into a new folder

## [5.1.1] - 2021-10-14

### 🐞 Fixes

- [#149](https://github.com/estruyf/vscode-front-matter/issues/149): Fix panel rendering when incorrect type for keywords is provided

## [5.1.0] - 2021-10-13

### 🎨 Enhancements

- [#141](https://github.com/estruyf/vscode-front-matter/issues/141): Allow content creation for page bundles or single files
- [#145](https://github.com/estruyf/vscode-front-matter/issues/145): Moved folder registration settings to `frontmatter.json` file
- [#147](https://github.com/estruyf/vscode-front-matter/issues/147): Error boundary added for metadata fields

### 🐞 Fixes

- Rendered more hooks than during the previous render in `FileList`
- [#142](https://github.com/estruyf/vscode-front-matter/issues/142): Fix for unknown tags where it throws an error
- [#143](https://github.com/estruyf/vscode-front-matter/issues/143): Fix for duplicate values in the file list
- [#144](https://github.com/estruyf/vscode-front-matter/issues/144): Fix for `toISOString` does not exist on object
- [#146](https://github.com/estruyf/vscode-front-matter/issues/146): Date parsing logic added with fallbacks

## [5.0.0] - 2021-10-07 - [Release Notes](https://beta.frontmatter.codes/updates/v5.0.0)

### ✨ New features

- [#113](https://github.com/estruyf/vscode-front-matter/issues/113): Integrating a local DB for media metadata (caption, alt)
- [#132](https://github.com/estruyf/vscode-front-matter/issues/132): Major changes to the media dashboard which allows you to navigate through all folders

### 🎨 Enhancements

- [#110](https://github.com/estruyf/vscode-front-matter/issues/110): Add support for workspaces with multiple folders
- [#117](https://github.com/estruyf/vscode-front-matter/issues/117): Allow to specify a singleline of text in the metadata fields
- [#119](https://github.com/estruyf/vscode-front-matter/issues/119): Multi-select support for choice fields
- [#121](https://github.com/estruyf/vscode-front-matter/issues/121): Choice fields support ID/title objects as well as a regular string
- [#122](https://github.com/estruyf/vscode-front-matter/issues/122): Update the filenames of your media
- [#124](https://github.com/estruyf/vscode-front-matter/issues/124): Add new `isPreviewImage` property to the content type field to specify custom preview images
- [#126](https://github.com/estruyf/vscode-front-matter/issues/126): Create new content from the available content types
- [#127](https://github.com/estruyf/vscode-front-matter/issues/127): Title bar action added to open the dashboard
- [#128](https://github.com/estruyf/vscode-front-matter/issues/128): Support for multi-select on image fields added
- [#131](https://github.com/estruyf/vscode-front-matter/issues/131): Folder creation support added on media dashboard
- [#134](https://github.com/estruyf/vscode-front-matter/issues/134): On startup, the extension checks if local settings can be promoted
- [#135](https://github.com/estruyf/vscode-front-matter/issues/135): `Hidden` property added for field configuration
- [#137](https://github.com/estruyf/vscode-front-matter/issues/137): Ask to move the `.templates` folder to the new `.frontmatter` folder

### 🐞 Fixes

- [#120](https://github.com/estruyf/vscode-front-matter/issues/120): Choice and number field not updating when set manually in front matter of the file
- [#133](https://github.com/estruyf/vscode-front-matter/issues/133): Fix for overriding default content type settings

## [4.0.1] - 2021-09-24

- [#114](https://github.com/estruyf/vscode-front-matter/issues/114): Fix for categories/tags provided as string in YAML
- [#115](https://github.com/estruyf/vscode-front-matter/issues/115): Fix for updating added categories/tags
- [#116](https://github.com/estruyf/vscode-front-matter/issues/116): Fix for not showing the `-1` limit on inputs

## [4.0.0] - 2021-09-22 - [Release Notes](https://beta.frontmatter.codes/updates/v4_0_0)

- [#101](https://github.com/estruyf/vscode-front-matter/issues/101): Date picker available on the metadata section
- [#102](https://github.com/estruyf/vscode-front-matter/issues/102): Support comma separated arrays in front matter
- [#103](https://github.com/estruyf/vscode-front-matter/issues/103): Added title and description field to the metadata section
- [#104](https://github.com/estruyf/vscode-front-matter/issues/104): Allow to set images in front matter from the metadata panel section
- [#105](https://github.com/estruyf/vscode-front-matter/issues/105): Content Type support with backwards compatibility
- [#106](https://github.com/estruyf/vscode-front-matter/issues/106): Introduction of team level settings for Front Matter
- [#107](https://github.com/estruyf/vscode-front-matter/issues/107): Number field support added in content type fields
- [#108](https://github.com/estruyf/vscode-front-matter/issues/108): Choice field support added in content type fields
- [#109](https://github.com/estruyf/vscode-front-matter/issues/109): JSON Config script added to automate the JSON schema
- [#111](https://github.com/estruyf/vscode-front-matter/issues/111): Insert media into the markdown contents
- [#112](https://github.com/estruyf/vscode-front-matter/issues/112): Add snippet support for media insertion

## [3.1.0] - 2021-09-10

- BETA version available at: [beta.frontmatter.codes](https://beta.frontmatter.codes)
- [#72](https://github.com/estruyf/vscode-front-matter/issues/72): Media view on the dashboard
- [#73](https://github.com/estruyf/vscode-front-matter/issues/73): List view option for the dashboard
- [#77](https://github.com/estruyf/vscode-front-matter/issues/77): Dashboard grouping pages functionality integrated
- [#81](https://github.com/estruyf/vscode-front-matter/issues/81): Optimizing the content folders to use a new setting to simplify configuration
- [#87](https://github.com/estruyf/vscode-front-matter/issues/87): Fix issue with autofocus and command palette
- [#88](https://github.com/estruyf/vscode-front-matter/issues/88): Fix issue with search sorting
- [#89](https://github.com/estruyf/vscode-front-matter/issues/89): Clear filter, sorting, and grouping button added
- [#90](https://github.com/estruyf/vscode-front-matter/issues/90): Refactoring to use Recoil state management
- [#91](https://github.com/estruyf/vscode-front-matter/issues/91): Support image previews from content folders
- [#98](https://github.com/estruyf/vscode-front-matter/issues/98): Add drag and drop support for media upload in a folder

## [3.0.2] - 2021-08-31

- [#82](https://github.com/estruyf/vscode-front-matter/issues/82): Hide the register and unregister commands from the command palette

## [3.0.1] - 2021-08-30

- [#79](https://github.com/estruyf/vscode-front-matter/issues/79): Fix scrollbar not visible on the welcome screen

## [3.0.0] - 2021-08-27

- [#61](https://github.com/estruyf/vscode-front-matter/issues/61): List of recently modified files
- [#64](https://github.com/estruyf/vscode-front-matter/issues/64): Publish toggle for easier publishing an article
- [#65](https://github.com/estruyf/vscode-front-matter/issues/65): Aggregate articles in draft
- [#66](https://github.com/estruyf/vscode-front-matter/issues/66): New dashboard webview on which you can manage all your content
- [#69](https://github.com/estruyf/vscode-front-matter/issues/69): Welcome screen for getting started

## [2.5.1] - 2020-08-23

- Fix typo in the `package.json` file for the preview command

## [2.5.0] - 2020-08-19

- Moved the center layout button to the other actions section
- [#60](https://github.com/estruyf/vscode-front-matter/issues/60): Added the ability to open a site preview in VS Code

## [2.4.1] - 2020-08-16

- Better editor highlighting functionality

## [2.4.0] - 2020-08-16

- [#21](https://github.com/estruyf/vscode-front-matter/issues/21): Folding provider for Front Matter implemented
- [#55](https://github.com/estruyf/vscode-front-matter/issues/55): Highlight Front Matter in Markdown files
- [#56](https://github.com/estruyf/vscode-front-matter/issues/56): Action to collapse all Front Matter panel sections at once
- [#57](https://github.com/estruyf/vscode-front-matter/issues/57): New action added to provide better writing settings (only for Markdown files)
- [#58](https://github.com/estruyf/vscode-front-matter/issues/58): Sections remember their previous state (folded/unfolded)
- [#59](https://github.com/estruyf/vscode-front-matter/issues/59): Center layout view toggle action added

## [2.3.0] - 2020-08-10

- Refactoring and showing other actions in the base view
- Show `BaseView` in Front Matter panel when switching to `welcome` tab
- [#31](https://github.com/estruyf/vscode-front-matter/issues/31): Automatically update the last modification date of the file when performing changes
- [#53](https://github.com/estruyf/vscode-front-matter/issues/53): Create current Markdown file as template

## [2.2.0] - 2020-08-06

- [#28](https://github.com/estruyf/vscode-front-matter/issues/28): Align the file its name with the article slug
- [#47](https://github.com/estruyf/vscode-front-matter/issues/47): Fix when table shows only value `0`
- [#48](https://github.com/estruyf/vscode-front-matter/issues/48): Added new folder registration message + notification helper
- [#49](https://github.com/estruyf/vscode-front-matter/issues/49): New initialize project command
- [#50](https://github.com/estruyf/vscode-front-matter/issues/50): Fix in the table rendering of rows
- [#51](https://github.com/estruyf/vscode-front-matter/issues/51): Panel actions base view enhanced to show project actions and information

## [2.1.0] - 2020-08-04

- [#44](https://github.com/estruyf/vscode-front-matter/issues/45): Added article creation command
- [#45](https://github.com/estruyf/vscode-front-matter/issues/45): WSL support added
- [#46](https://github.com/estruyf/vscode-front-matter/issues/46): Make the tag pickers render in full width

## [2.0.1] - 2020-07-27

- [#42](https://github.com/estruyf/vscode-front-matter/issues/42): Small enhancement to the table layout
- [#43](https://github.com/estruyf/vscode-front-matter/issues/43): Fix for collapsible sections and taxonomy picker

## [2.0.0] - 2020-07-23

- Redesigned sidebar panel
- Sidebar background styling match the VSCode defined sidebar color
- Added support for `mdx` files
- Added support for `enter` press in the combobox
- [#41](https://github.com/estruyf/vscode-front-matter/issues/41): Word count implementation + extra details
- [#40](https://github.com/estruyf/vscode-front-matter/issues/40): Added checks for the keyword usage in title, description, slug, and content

## [1.18.0] - 2020-07-20

- Updated README

## [1.17.1] - 2020-06-28

- [#34](https://github.com/estruyf/vscode-front-matter/issues/34): Fix that last modification date does not update the publication date
- [#38](https://github.com/estruyf/vscode-front-matter/issues/38): Update the last modification date on new page creation from the template

## [1.17.0] - 2020-06-14

- [#36](https://github.com/estruyf/vscode-front-matter/issues/36): Add the option to change the Front Matter its description field

## [1.16.1] - 2020-05-27

- Fix for Node.js v14.16.0

## [1.16.0] - 2020-05-04

- Add all front matter properties as an argument for custom scripts

## [1.15.1] - 2020-05-04

- Add the ability to specify a custom Node path

## [1.15.0] - 2020-05-04

- Added the ability to add your own custom scripts as panel actions.

## [1.14.0] - 2020-03-19

- New links added to the Front Matter panel to reveal the file and folder.

## [1.13.0] - 2020-02-26

- Implemented links to quickly open the extension settings + issue from the FrontMatter view panel
- Added button to update the modified time in the FrontMatter view panel

## [1.12.1] - 2020-02-13

- Fix Front Matter SVG

## [1.12.0] - 2020-01-26

- [#29](https://github.com/estruyf/vscode-front-matter/issues/29): Open file after creating it from the template

## [1.11.1] - 2020-12-10

- [#26](https://github.com/estruyf/vscode-front-matter/issues/26): Fix for arrow selection in the dropdown.

## [1.11.0] - 2020-12-10

- [#25](https://github.com/estruyf/vscode-front-matter/issues/25): Moved from Material UI Autocomplete to Downshift. This gives more flexibility, and allows to focus the inputs from a VSCode command.
- Changed the `Front Matter: Insert <tags | categories>` functionality to open in the panel, instead of using the VSCode dialogs.

## [1.10.0] - 2020-12-03

- FrontMatter panel implemented. This panel allows you to control all extension actions, but not only that. It makes adding tags and categories in a easier way to your page.

## [1.9.0] - 2020-11-25

- [#23](https://github.com/estruyf/vscode-front-matter/issues/23): Implemented the option to create and use templates for article creation (front matter will be updates as well).

## [1.8.0] - 2020-11-20

- [#22](https://github.com/estruyf/vscode-front-matter/issues/22): Allow to configure the SEO Title and Description lengths.

## [1.7.2] - 2020-10-30

- [#19](https://github.com/estruyf/vscode-front-matter/issues/19): fix for tag insertion when empty tag is used

## [1.7.1] - 2020-10-21

- Fix for title and description length check

## [1.7.0] - 2020-09-30

- [#18](https://github.com/estruyf/vscode-front-matter/issues/18): Added date and modified date field names settings to be able to change the extension its behavior

## [1.6.0] - 2020-09-23

- Syntax highlighting for Hugo shortcodes has been added

## [1.5.0] - 2020-09-10

- [#17](https://github.com/estruyf/vscode-front-matter/issues/17): Make front matter be indentation `tabSize` aware

## [1.4.0] - 2020-08-24

- Added set `lastmod` date command
- [#16](https://github.com/estruyf/vscode-front-matter/issues/16): Fixed hardcoded length value

## [1.3.0] - 2020-08-22

- Added SEO description warning when over 140 characters is used

## [1.2.0] - 2020-07-03

- Added SEO title warning when over 60 characters is used

## [1.1.1] - 2020-04-07

- `TOML` delimiter fix

## [1.1.0] - 2020-03-25

- `TOML` support added

## [1.0.0] - 2020-03-25

- First major release
- Fixed an issue with `null` tag/category values

## [0.0.10] - 2019-09-17

- Updated the logic to remove quotes from front matter property values

## [0.0.9] - 2019-09-17

- Added setting to specify if you want to enable/disable array indents in the front matter of your article
- Remove quotes on date strings

## [0.0.8] - 2019-09-04

- Added command to generate a clean article slug

## [0.0.7] - 2019-08-28

- Added command to remap tags or categories in all posts: `Front Matter: Remap tag/category in all articles`

## [0.0.6] - 2019-08-28

- Updated `package.json` file to include preview label
- Added the status bar item to quickly view and update the draft status of an article

## [0.0.5] - 2019-08-27

- Updated title, description and logo

## [0.0.4] - 2019-08-26

- Added set date command

## [0.0.3] - 2019-08-26

- Support added for `*.markdown` files

## [0.0.2] - 2019-08-26

- Updated extension to bundle the project output

## [0.0.1] - 2019-08-26

- Initial beta version
