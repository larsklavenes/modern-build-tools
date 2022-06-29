module.exports = function (plop) {
  // Helper that returns a `folder name` based on the selected resource type.
  plop.setHelper('defaultResourceFolder', resourceType => {
    if (resourceType === 'hook') return 'hooks'
    if (resourceType === 'util') return 'utils'
    return 'components'
  })

  // Helper that returns the proper path (to create the files) based on the selected options.
  plop.setHelper(
    'pathFolder',
    (resourceFolderName, defaultResourceFolder, ownFolder, resourcePath) => {
      // Set up a resource own folder in case `ownFolder` option is truthy.
      const ownFolderName = ownFolder ? `/${resourceFolderName}` : ''

      // Creates the full path: either the provided path or the default one.
      return resourcePath
        ? `${resourcePath}${ownFolderName}`
        : `src/${defaultResourceFolder}${ownFolderName}`
    }
  )

  // Generate resource files.
  plop.setGenerator('create resource files', {
    description:
      'create all required files for a specified resource (components/hooks/utils)',
    prompts: [
      {
        type: 'input',
        name: 'resourceName',
        message:
          "The resource name (component / hook / util).\n The files will be named with the following format: \n • component: pascal case, i.e. 'ComponentName' \n • hook / util: camel case, i.e. 'useComponent' \n Enter the name: ",
      },
      {
        type: 'list',
        name: 'resourceType',
        message: 'Which kind of resource do you want to create?',
        choices: ['component', 'hook', 'util'],
        default: 'component',
      },
      {
        type: 'confirm',
        name: 'ownFolder',
        message:
          'Do you want to create the files inside a folder with the same resource name? (folder will be named in camel case)',
      },
      {
        type: 'input',
        name: 'resourcePath',
        message:
          "The path where the files should be created, i.e.: 'src/modules/home' \n In case no path is provided, the files will be created inside the corresponding folder, according to the type of resource selected: \n • component: will be created in the 'components' folder \n • hook: will be created in the 'hooks' folder \n • util: will be created in the 'utils' folder \n Enter the path: ",
      },
      {
        type: 'confirm',
        name: 'unitTestsFile',
        message: 'Do you want to create a unit tests file?',
      },
      {
        type: 'confirm',
        name: 'storybookFile',
        message: 'Do you want to create a storybook file?',
        when: answers => answers.resourceType === 'component',
      },
    ],
    actions: answers => {
      // General params.
      const type = 'add'
      const skipIfExists = true
      const plopTemplates = 'plop-templates'
      const basePath =
        '{{pathFolder (camelCase resourceName) (defaultResourceFolder resourceType) ownFolder resourcePath }}'

      const files = {
        component: {
          type,
          path: `${basePath}/{{pascalCase resourceName}}.tsx`,
          templateFile: `${plopTemplates}/component.hbs`,
          skipIfExists,
        },
        hook: {
          type,
          path: `${basePath}/{{camelCase resourceName}}.ts`,
          templateFile: `${plopTemplates}/hook.hbs`,
          skipIfExists,
        },
        util: {
          type,
          path: `${basePath}/{{camelCase resourceName}}.ts`,
          templateFile: `${plopTemplates}/util.hbs`,
          skipIfExists,
        },
        test: {
          type,
          path: `${basePath}/{{${
            answers.resourceType === 'component' ? 'pascalCase' : 'camelCase'
          } resourceName}}.test.tsx`,
          templateFile: `${plopTemplates}/${answers.resourceType}.test.hbs`,
          skipIfExists,
        },
        stories: {
          type,
          path: `${basePath}/{{pascalCase resourceName}}.stories.tsx`,
          templateFile: `${plopTemplates}/component.stories.hbs`,
          skipIfExists,
        },
      }

      if (!answers || !answers.resourceName || !answers.resourceType)
        return ['!--------- NO FILES WERE CREATED ---------!']

      let filesToBeCreated = [answers.resourceType]
      if (answers.unitTestsFile) filesToBeCreated.push('test')
      if (answers.resourceType === 'component' && answers.storybookFile)
        filesToBeCreated.push('stories')

      // eslint-disable-next-line security/detect-object-injection
      return filesToBeCreated.map(file => files[file])
    },
  })
}
