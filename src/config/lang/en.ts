export default {
  log: {
    login: 'Login',
    title: 'Log Management',
    exportBtn: 'Export',
    deleteBtn: 'Delete',
    clearBtn: 'Clear',
    username: 'Username',
    handle: 'Event Info',
    handleTime: 'Operation Time',
    selectAllPage: 'Select all this page.',
    deleteInfo: 'Log will be deleted immediately, you cannot undo this action',
    deleteDesc: 'Are you sure you want to delete the log?',
    deleteEnter: 'Delete',
    deleteClear: 'Cancel',
    clearEnter: 'Clear',
    clearClear: 'Cancel',
    deleteTitle: 'Delete log',
    clearTitle: 'Clear log',
    clearInfo: 'Log will be cleared immediately, you cannot undo this action',
    clearDesc: 'Are you sure you want to clear the log?',
    choseLog: 'Please choose a log',
  },
  base: {
    yearAgo: 'years ago',
    monthAgo: 'months ago',
    dayAgo: 'days ago',
    hourAgo: 'hours ago',
    minuteAgo: 'minutes ago',
    secondAgo: 'seconds ago',
    login: 'Login',
    loading: 'Loading...',
    deploy: 'Add Agent',
    logout: 'Exit',
    oldPassword: 'Please enter the old password',
    newPassword: 'Please enter a new password',
    rePassword: 'Please enter the password again',
    diffPassword: 'Password does Not match',
  },
  message: {
    notice: 'Notice',
    clearAll: 'Clear All',
    Empty: 'Empty',
    warning: 'This operation will delete the message. Do you want to continue?',
    tips: 'Tips',
    confirm: 'Confirm',
    cancel: 'Cancel',
  },
  menu: {
    webhook: 'Webhook',
    agentConfig: 'Agent Config',
    agentRank: 'Agent Config',
    about: 'About DongTai',
    projectEdit: 'ProjectEdit',
    home: 'Home',
    scaManage: 'SCA',
    login: 'Login',
    project: 'APPLICATIONS',
    projectManage: 'Applications',
    projectDetail: 'Project Details',
    vuln: 'Vulnerabilities',
    sensitive: 'Sensitive',
    template: 'Template',
    vulnList: 'Application Vulnerability List',
    vulnDetail: 'Application vulnerability details',
    sca: 'Libraries',
    scaList: 'Component management list',
    scaDetail: 'Component management details',
    changeLogo: 'Site Identity',
    setting: 'Settings',
    agentManage: 'Agent',
    strategyManage: 'Strategy',
    strategy: 'Strategy',
    hookRule: 'Custom Rule',
    upgradeOnline: 'System upgrade',
    sysInfo: 'Agent Config',
    changePassword: 'Account',
    logManage: 'Log',
    user: 'Role Management',
    talent: 'Tenant',
    department: 'Organization',
    taintPool: 'Search',
    search: 'Stain search',
    poolDetail: 'Stain details',
    language: 'Language',
    chinese: 'Chinese',
    englist: 'English',
    statusMonitoring: 'Status Monitoring',
    userSetting: 'User Setting',
    roleSetting: 'Role Setting',
    sensitiveManage: 'Sensitive',
    templateManage: 'Template',
  },
  views: {
    webhook: {
      deleteConfirm: 'Are you sure you want to delete the webhook?',
      deleteConfirmPop: 'Delete',
    },
    agentConfig: {
      confirmDel: 'Are you sure you want to delete this configuration',
      confirm: 'Confirm',
      cancel: 'Cancel',
    },
    scaManage: {
      selectWarning: 'Please select a library',
      component: 'Component',
      vuln: 'Vulnerability',
      uploadBtn: 'Upload',
      download: 'Download Template',
      upload: 'Upload',
      addSca: 'Add Component',
      all: 'All',
      selected: 'Selected',
      race: 'kind',
      strip: 'item(s)',
      on: 'Enable',
      off: 'Disable',
      del: 'Delete',
      empty: 'No data temporarily',
      yes: 'Yes',
      no: 'No',
      updateTime: 'Modified Date',
      user: 'Creator',
      status: 'Status',
      address: 'Settings',
      edit: 'Edit',
      delpop: 'Are you sure you want to delete it? ',
      typeName: 'Type Name',
      GroupID: 'Enter the GroupID',
      AtrifactID: 'Enter the AtrifactID',
      Version: 'Enter the Version',
      Sha1: 'Enter the Sha1',
      PackageName: 'Enter the PackageName',
      License: 'Enter the License',
      openOrNot: 'Enabled',
      clear: 'Cancel',
      enter: 'OK',
      add: 'Add',
      changeOne: 'This operation will batch delete',
      changeTwo: 'data, are you sure you want to continue?',
      pop: 'Prompt',
      searchDesc: 'Find Package Name',
    },
    changeLogo: {
      settingTitle: 'Customize Site Logo',
      settingInfo:
        'You can upload a logo and icon image to appear, otherwise "DongTai" will be the default.Notice: You MUST upload Logo and Icon at the same time.',
      uploadLogo: 'Upload Logo',
      uploadLogoOne: `1. Before uploading your logo, ensure it match the image requirements: Min: 100 × 30 pixel, Max: 200 × 30 pixels, Image ratio: 10:3, PNG file format only, Image transparent, Max size: 2MB.`,
      uploadLogoTwo: '2. You can preview your logo before upload.',
      enLogo: 'English Logo',
      zhLogo: 'Chinese Logo',
      change: 'Click To Select Logo',
      uploadIcon: 'Upload Icon',
      uploadIconOne:
        '1. Before uploading your icon, ensure it match the image requirements: Min: 32 × 32 pixel, Max: 128 × 128 pixels, Image ratio: 1:1, ICO file format only, Image transparent, Max size: 128KB.',
      uploadIconTwo: ' 2. You can preview your logo before upload.',
      warningPng: 'PNG file format only',
      warning2M: 'Max size: 2 MB',
      warningICO: 'ICO file format only',
      warning128K: 'Max size: 128 KB',
    },
    statusMonitoring: {
      on: 'Running',
      off: 'Close',
      oss: 'Cloud Agent Service',
      normal: 'Normal',
      error: 'Error',
      dongtai_openapi: 'Dongtai Openapi Status',
      dongtai_engine: 'Dongtai Engine Status',
      engine_monitoring_indicators: 'Engine Monitoring Indicators',
      padding: 'Pending',
      item: '',
    },
    deploy: {
      begin: 'Select a language and start the installation',
      installing: 'Installing',
      agent: 'Agent',
      term:
        'Before the installation, please make sure to confirm the following precautions: ',
      download: 'Downloading Agent',
      install: 'Installing Agent',
      copy: 'copy',
      downloadWorld: 'Download',
      reloadTile: 'Restarting Services (For Manual Installation)',
      reloadDesc: 'Please restart your application service.',
      help: 'Instructions',
      agentInstructions: 'Agent installation instructions',
      moreDocument: 'More Document',
      moreSupport: 'More Support',
      issue: 'Submit ISSUE',
      java: {
        autoInstall: 'Automatic Installation',
        ManualInstallation: 'Manual Installation',
        autoInstallDesc:
          'Attach the DongTai Java Agent into the application by service process id with the following command:',
        term1:
          '1. Check whether the service of installing the probe and the OPENAPI service are network interoperable.',
        term2: `2. Ensure the service of installing the probe meet the requirement as below:`,
        term3: `a. Operating system: Windows/Linux/Unix`,
        term4: `b. JDK version: 1.6 and above`,
        term5: `c. Framework: Any`,
        term6: `d. Middleware: Any`,
        p1:
          'Start/Restart the Web Service and then access it with the browser.Once registered, the agent should appear in the Settings > Engine list.If you do not see the agent on list within a few minutes, check the following:',
        p2: '1. Check the agent.jar',
        p3:
          'Execute the following command “java -jar /temp/agent.jar” to check it is working.Please re-download the agent file and try again otherwise.If the problem still persists, you can directly report the issue to us on Github and we will get you an answer back shortly.',
        p4: '2. Check the network connection',
        p51: 'If the Web Service is unable to access to ',
        p52:
          'Please check the network connection and try again.Otherwise, you can directly report the issue to us on Github and we will get you an answer back shortly.',
        title2:
          'Ensure the service of installing the probe meet the requirement as below',
      },
      python: {
        ManualInstallation: 'Manual Installation',
        os: 'Operating system: Windows/Linux/macOS',
        term1: '1. Python Version: 3.6 and above',
        term2: '2. Interpreter: CPython',
        term3: '3. Middleware: uWSGI',
        termA: 'Compiling Dependencies',
        termAa: 'gcc (Linux/macOS)',
        termAb: 'make (Linux/macOS)',
        termAc: 'cmake',
        termAd: 'Visual Studio (Windows)',
        term4: '4. Web Framework: ',
        'term4-1': ' - Django：3.0-3.2',
        'term4-2': ' - Flask：1.0-1.2',
        term6: '5. Module: ',
        'term6-1': ' - psutil >= 5.8.0',
        'term6-2': ' - requests >= 2.25.1',
        'term6-3': ' - pip >= 19.2.3',
        manualInstallationDesc:
          'Extract download file with the following command.',
        settings: 'Settings',
        p1:
          'Start/Restart the Web Service and then access it with the browser.Once registered, the agent should appear in the Settings > Engine list.If you do not see the agent on list within a few minutes, check the following:',
        p2: '1. Check the dongtai-agent-python.tar.gz',
        p3:
          'Execute the following command “pip3 install ./dongtai-agent-python.tar.gz” to check it is working.Please re-download the agent file and try again otherwise.If the problem still persists, you can directly report the issue to us on Github and we will get you an answer back shortly.',
        p4:
          '2. Check the setting.py in Django application Ensure the following line is added to the MIDDLEWARE configuration.',
        p5: `'dongtai_agent_python.middlewares.django_middleware.FireMiddleware'`,
        p6: '3. Check the network connection',
        p71: 'If the Web Service is unable to access to ',
        p72:
          'Please check the network connection and try again.Otherwise, you can directly report the issue to us on Github and we will get you an answer back shortly.',
        settingName: 'Configuration Item Name',
        n1:
          'Configure the projectName in the system environment variable, demoProjectName is the custom project name. Keep it consistent with the new application name in the Applications list, otherwise, the traffic cannot be uploaded.',
        n2: 'Import linux/mac command:',
        n3: 'export projectName=demoProjectName',
        n4: 'Adds Windows  environment variables:',
        n5: 'Verification: Enter env directly on the command line to view',
        n6:
          'Note: If you cannot configure the system environment variables, you can change the agent configuration file, modify the project name, and find the path address of the python installation agent extension package, for example: /Library/Frameworks/Python.framework/Versions/3.8/lib/python3.8/site -packages/dongtai_agent_python modify project.name in dongtai_agent_python/config.json, the priority of system environment variable projectName is higher than project.name in configuration file;',
      },
      php: {
        Manualinstallation: 'manual installation',
        term1: 'PHP version no less than 8.0.9',
        manualInstallationDesc1:
          'a. Manually unzip php-agent.tar.gz, there are three files in PHP agent: Dongtai_php_agent.so& policy.json &dongtai-php-property.ini, put Dongtai_php_agent. Put so into the extension in the PHP installation environment, policy The path of JSON can be found in Dongtai PHP property Modify hook. Ini json. The path corresponding to path. The default is "/var/www/PHPagent/policy.JSON".',
        manualInstallationDesc2:
          'b.dongtai-php-property .ini placed in the php configuration folder, such as conf.d, php –m to see if the installation is successful, if there is no dongtai_php_agent, remove the dongtai-php-property.ini in the extension=dongtai_php_agent comments, re-view.',
        manualInstallationDesc3:
          'c. Through the terminal, you can call the local PHP file test results, you can also enter the range test, the range address: https://github.com/jinghao1/phpvul',
      },
      go: {
        term1: 'Go version no less than 1.11',
        Manualinstallation: 'manual installation',
        manualInstallationDesc1:
          'a.Download dongtai-go-agent-config.yaml is placed in the project root directory',
        manualInstallationDesc2:
          'b.Import the basic package in the project entry file_ "github.com/HXSecurity/DongTai-agent-go/run/base"',
        manualInstallationDesc3:
          'c.Example of introducing a framework package into the project entry file:_ "github.com/HXSecurity/DongTai-agent-go/run/gin"          ',
        manualInstallationDesc4:
          'd.Framework packages are currently supported:',
        manualInstallationDesc5:
          'gorm: _ "github.com/HXSecurity/DongTai-agent-go/run/gorm"',
        manualInstallationDesc6:
          'http: _ "github.com/HXSecurity/DongTai-agent-go/run/http"',
        manualInstallationDesc7:
          'httprouter： _ "github.com/HXSecurity/DongTai-agent-go/run/httpRouter"',
        manualInstallationDesc8:
          'e.run: go mod tidy Waiting for synchronization',
        manualInstallationDesc9:
          'f.Add command line parameters： -gcflags "all=-N -l" Run the project, for example： go run -gcflags "all=-N -l" main.go',
      },
    },
    search: {
      commonly: 'Common query syntax',
      copySuccess: 'Copied succefully',
      copyFail: 'Failed to copy',
      important: 'High',
      height: 'Medium',
      middle: 'Low',
      low: 'Info',
      graph: 'Graph',
      edit: 'Edit',
      http: 'HTTP Info',
      no: 'No',
      assignVuln: 'Vulnerability',
      project: 'Application',
      user: 'User',
      no_project_name: 'Unbound',
      agent: 'Agent',
      running: 'Running',
      stop: 'Stopped',
      sending: 'Replaying',
      send: 'Send',
      copy: 'Copy',
      defPolicy: 'Built-in policy',
      myPolicy: 'Custom Policy',
      searchValuePlace: 'Enter the query content',
      prependPlace: 'Filter',
      url: 'URL',
      signature: 'Method Signature',
      sinkvalues: 'Tained Data',
      req_header_fs: 'Request Header',
      req_data: 'Request Body',
      res_header: 'Response Header',
      res_body: 'Response Body',
      empty: 'No matches found for your search',
      warning: 'Enter search content',
      contain: 'contain',
      exclude: 'exclude',

      farthest: 'farthest',
      lately: 'lately',

      day: 'day',
      hour: 'hour',
      minute: 'minute',
      second: 'second',

      timeWarning: 'Please enter an integer greater than 0',
      enterTime: 'Enter',

      quickSelection: 'Quick Selection',

      commonlyU: 'Commonly',

      today: 'today',
      '24Hours': '24 Hours',
      thisWeek: 'This Week',
      '7Day': '7 Day',
      '15Minutes': '15 Minutes',
      '30Minutes': '30 Minutes',
      '1Hour': '1 Hour',
    },
    hookPage: {
      all: 'All',
      sourceRule: 'Source Rules',
      propRule: 'Propagation Rules',
      filterRule: 'Filter Rules',
      dangerRule: 'Sink Rules',
      allHooksNum: 'Total Rules',
      sinkHooksNum: 'Sink Rules',
      selected: 'Selected',
      race: 'kind',
      strip: 'item(s)',
      selectType: 'Please select the rule type',
      addHookType: 'Add Rule Type',
      addHook: 'Add Rule',
      on: 'Enable',
      off: 'Disable',
      del: 'Delete',
      empty: 'No data temporarily',
      ruleInfo: 'Rule Details',
      point: 'Stain Input',
      pointOut: 'Stain Output',
      hoopDeep: 'HOOK Depth',
      children: 'Subclasses',
      nowChildren: 'Class and Subclass',
      now: 'Current class',
      openTrace: 'Enable taint tracking',
      yes: 'Yes',
      no: 'No',
      updateTime: 'Modified Date',
      user: 'Creator',
      status: 'Status',
      address: 'Settings',
      edit: 'Edit',
      delpop: 'Are you sure you want to delete it? ',
      hookType: 'Rule Set',
      hooksType: 'Rule Type',
      typeName: 'Type Name',
      namePlaceholder:
        'Enter the type name, e.g.,String, StringBuilder, etc. Class name is recommended to use',
      typeShotName: 'Type Abbreviation',
      shotNamePlaceholder:
        'Enter the abbreviation of the type, e.g.,string-01, string-02 for quick search',
      openOrNot: 'Enabled',
      clear: 'Cancel',
      enter: 'OK',
      ruleInfoPlaceholder:
        'Enter HOOK rules in the format. e.g.,java.lang.String.<init>(java.lang.String)',
      source: 'Stain Source',
      target: 'Stain Target',
      relation: 'Please choose a logical relationship',
      origin: 'Please select the data source',
      paramPlaceholder: 'Parameter number, starting from 1',
      add: 'Add',
      hookTrack: 'Inheritance Depth',
      track: 'Track',
      depth: 'Inheritance Depth',
      onlyChildren: 'Subclass',
      onlyNow: 'Class',
      or: 'or',
      and: 'and',
      O: 'Object',
      R: 'Return value',
      P: 'Parameter',
      changeOne: 'This operation will batch',
      changeTwo: 'data, are you sure you want to continue?',
      pop: 'Prompt',
      changeWarning: 'Please select the data to be operated first',
      spreadType: 'Propagation Rules',
      contaminatedType: 'Source Rules',
      filterType: 'Filter Rules',
      dangerType: 'Sink Rules',
      enterType: 'Entry Method Rules',
      searchDesc: 'Find rule details',
    },
    login: {
      title: 'User login',
      subTitle: 'Welcome to DongTai IAST',
      user: 'Account',
      usernamePlaceholder: 'Please enter the account',
      password: 'Password',
      passwordPlaceholder: 'Please enter the password',
      captcha: 'Verification code',
      captchaPlaceholder: 'Please enter the verification code',
    },
    vulnList: {
      filter: 'Filters',
      language: 'Language',
      level: 'Severity',
      type: 'Vulnerability Category',
      reset: 'Reset',
      resetAll: 'Reset All',
      project_name: 'Application',
      searchExample: 'Enter a search criteria, e.g.,http://127.0.0.1:8080',
      searchName: 'Enter application name',
      sort: 'Sort On',
      developLanguage: 'Development Language',
      vulnStatus: 'Status',
      toVeVerified: 'Pending',
      verification: 'Verifying',
      confirmed: 'Confirmed',
      ignored: 'Ignore',
      processed: 'Solved',
      choose: 'Selected',
      strip: 'item(s)',
      clear: 'Cancel',
      enter: 'OK',
      verificationBatch: 'Verify (Selected)',
      verificationAll: 'Verify (All)',
      chooseWarning:
        'Please select the vulnerability that needs to be verified',
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      will: 'Coming soon',
      all: ' all vulnerabilities',
      batch: ' selected vulnerabilities',
      recheckDesc: ' will be verified, are you sure you want to continue?',
      recheckInfo: 'Prompt',
      has: 'exist',
      vule: 'vulnerability',
      is: 'of',
      reqHas: ' appears',
      position: 'Position',
      orderOptions: {
        type: 'Vulnerability Category',
        level: 'Severity',
        url: 'URL',
        latest_time: 'Last Detected',
        first_time: 'First Detected',
      },
    },
    vulnDetail: {
      vulnList: 'Applications',
      source_value: 'Initial stain',
      target_value: 'Spread tainted',
      baseInfo: 'Information',
      vulnDesc: 'Description',
      recheck: 'Verify',
      export: 'Export',
      delete: 'Delete',
      httpRequest: 'HTTP Info',
      codeDemo: 'Example of Vulnerable Code',
      graph: 'Stain Flow Graph',
      suggest: 'Recommendations',
      appInfo: 'Application Information',
      devEnv: 'Runtime Environment',
      path: 'Environmental Variables',
      url: 'URL',
      first_time: 'First Detected',
      serverIp: 'Server IP',
      clientIp: 'Client IP',
      language: 'Language',
      port: 'Port',
      projectName: 'Application',
      level: 'Severity',
      counts: 'Number of Occurrences',
      type: 'Type',
      file: 'File',
      num: 'line number',
      caller: 'Call method',
      fileAndNum: 'File and line number',
      wuDianZhi: 'Dilution value',
      route: 'Path',
      middleware: 'Middleware',
      command: 'Command',
      other: 'Other',
      state: 'State',
      taintValue: 'Attack Vector',
      taintParamName: 'Attack Parameters',
      agent: 'Agent',
      version: 'Application Version',
      reload: 'Refresh',
      has: 'exist',
      vule: 'vulnerability',
      is: 'of',
      reqHas: ' appears',
      position: 'Position',
      untreated: 'Untreated',
      replay: 'Request Replay',
      stainSource: 'Stain Source',
      communicationMethod: 'Tainted Data',
      dangerMethod: 'Sink',
      deleteVuln: 'Delete Vulnerability',
      deleteVulnInfo:
        'This vulnerability will be deleted immediately. You cannot undo this action.',
      deleteVulnDesc: 'Are you sure you want to delete this vulnerability? ',
      deleteVulnEnter: 'Delete',
      cancel: 'Cancel',
      canNotReplay: 'Historical data does not support replay',
      exportSuccess: 'Report successfully exported',
      exportFail: 'Failed to export the report',
      empty: 'Empty',
      req: 'Request',
      res: 'Response',
      reported: 'Reported',
      confirmed: 'Confirmed',
      fixed: 'Fixed',
      ignored: 'Ignore',
      vuln: 'vulnerability',
    },
    scaList: {
      license: 'License',
      filter: 'Filter',
      language: 'Language',
      level: 'Severity',
      type: 'Type',
      reset: 'Reset',
      resetAll: 'Reset all',
      project_name: 'Application',
      searchExample: 'Enter search criteria, such as: spring',
      searchName: 'Enter the application name in the search field',
      sort: 'Sort On',
      developLanguage: 'Development Language',
      orderOptions: {
        project_name: 'Application',
        level: 'Severity',
        package_name: 'Component',
        version: 'Version',
        language: 'Language',
        vul_count: 'Number of Vulnerabilities',
      },
      tableHeaders: {
        close: 'Do you want to close it?',
        enter: 'Confirm',
        clear: 'Cancel',
        update_time: 'Modified time',
        create_time: 'Created time',
        context_path: 'Context',
        method_pool: 'Method Pool',
        http_method: 'Request Method',
        req_header: 'Request Body',
        name: 'Component',
        path: 'Path',
        version: 'Version',
        application: 'Application',
        language: 'Language',
        level: 'Severity',
        count: 'Count',
        time: 'Detected Time',
        componentInfo: 'Libraries',
        dataTest: 'Debug',
      },
    },
    scaDetail: {
      agent: 'Agent',
      version_now: 'Application Version',
      version: 'Version',
      level: 'Severity',
      project_name: 'Application',
      vul_count: 'Number of Vulnerabilities',
      unit: '',
      signature_value: 'Component Hash',
      vulList: 'Vulnerabilities',
      cveNumber: 'CVE Number',
      cweNumber: 'CWE Number',
      vulName: 'Vulnerability',
      vulLevel: 'Severity',
      safeVersion: 'Remediation Version',
      operate: 'Operation',
      detail: 'Details',
      reload: 'Refresh',
      scaList: 'Libraries',
      path: 'Path',
      vulDetail: {
        title: 'Vulnerability Details',
        num: 'Vulnerability Number',
        name: 'Vulnerability Name',
        desc: 'Vulnerability Overview',
        detail: 'Vulnerability Details',
      },
    },
    changePassword: {
      username: 'Username',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      confirmNewPassword: 'Confirm New Password',
      submit: 'Save',
    },
    agentManage: {
      method_queue: 'Method Queue',
      replay_queue: 'Replay Queue',
      report_queue: 'Report Queue',
      step: 'time',
      item: 'total',
      delAgentInfo:
        'This operation will permanently delete the agent, do you want to continue?',
      delAgentPop: 'Prompt',
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      delAgent: 'Delete Agent',
      enterDel: 'Confirm to delete',
      clear: 'Cancel',
      agentDelInfo:
        'This agent will be deleted immediately. You cannot undo this action.',
      agentDelPop: 'Are you sure you want to delete this agent?',
      running: 'Running',
      not_running: 'Stopped',
      is_core_running: 'Core component running',
      is_core_not_running: 'Core component is stopped',
      offline: 'Offline',
      normal: 'Normal',
      state: 'Agent State',
      searchValue: 'Enter search criteria',
      choose: 'Selected',
      strip: 'item(s)',
      on: 'Enable',
      off: 'Disable',
      del: 'Delete',
      flow: 'Requests',
      address: 'Address',
      payload: 'CPU(%)',
      status: 'Status',
      manage: 'Settings',
      owner: 'User',
      timestapm: 'Create Time',
      projectName: 'Application',
      healthy: 'Health Status',
      language: 'Language',
      selectWarning: 'Please Select The Agent To Operate',
      startupTime: 'Startup Time（ms）',
    },
    strategyManage: {
      confirmDel: 'Confirm to delete',
      confirm: 'Confirm',
      cancel: 'Cancel',
      no: 'No',
      edit: 'Edit',
      enter: 'OK',
      clear: 'Cancel',
      del: 'Delete',
      warning: 'Policy is currently edited',
      deleteWarning:
        'This operation will permanently delete the data, do you want to continue?',
      deletePop: 'Prompt',
      name: 'Policy',
      detail: 'Description',
      status: 'Enabled',
      operate: 'Operation',
      settings: 'Settings',
      fix: 'Recommendation',
      addChildren: 'Add Group',
      children: 'Subgroup',
      tname: 'Department name',
      twname: 'Please enter department name',
      twnamep: 'Please enter department name to search',
      searchValue: 'Please enter search name',
      level: 'Level',
      editTitle: 'Edit Policy',
      addTitle: 'Add Policy',
      viewTitle: 'Policy Detail',
      notnull: 'The value cannot be empty',
      view: 'Preview',
    },
    sensitiveManage: {
      no: 'No',
      edit: 'Edit',
      enter: 'OK',
      clear: 'Cancel',
      del: 'Delete',
      deleteWarning:
        'This operation will permanently delete the data, do you want to continue?',
      deletePop: 'Prompt',
      name: 'Policy',
      detail: 'Description',
      status: 'Enabled',
      operate: 'Operation',
      settings: 'Settings',
      fix: 'Recommendation',
      add: 'add',
      searchValue: 'Search for vulnerability types',
      testData: 'Test Data',
      test: 'Run',
      res: 'Match Results',
      nameR: 'Please select the policy name',
      detailR: 'Please enter how to match',
      fixR: 'Please enter a matching rule',
      t: 'Sensitive data configuration',
      p1:
        'Sensitive information detection function officially opened public testing, in order to detect the security risk of sensitive information leakage, it is necessary to configure the matching rules of sensitive information and related policies.',
      'p1-1': 'Detection location:',
      'p1-2': '1. HTTP Request Param',
      'p1-3': '2. HTTP Request Post Data',
      'p1-4': '3. HTTP Response Data',
      p2: 'Process (to increase mobile phone number leakage for example): ',
      p3:
        '1. Go to the "Policy Management" page, add a new policy "Mobile Phone Number Leak", fill in the policy description, repair suggestions and choose to enable;',
      p4:
        '2. Go back to the current page, click on the "New Matching Rules" button, select the policy name is "Mobile Phone Number Leak", match the way is "Regular Match", fill in "Match Rules" and click Save.',
      tip:
        'The policy name comes from the policy name in Policy Management, and if it does not exist, you can contact the administrator to go to Policy Management New policy',
      search: 'Search',
      noValidatio: 'No Validatio Data',
    },
    templateManage: {
      fid: 'Severity',
      no: 'No',
      edit: 'Edit',
      enter: 'OK',
      clear: 'Cancel',
      del: 'Delete',
      deleteWarning:
        'This operation will permanently delete the data, do you want to continue?',
      deletePop: 'Prompt',
      name: 'Name',
      selectAll: 'Select All',
      status: 'Enabled',
      operate: 'Operation',
      settings: 'Settings',
      add: 'add',
      searchValue: 'Search for Scan Strategy',
      nameR: 'Please select the scan strategy name',
      tip:
        'The policy name comes from the policy name in Policy Management, and if it does not exist, you can contact the administrator to go to Policy Management New policy',
      search: 'Search',
    },
    upgradeOnline: {
      online: 'Online upgrade',
      onlineDesc:
        'Dynamic IAST needs to be online to update. Please ensure the network connection',
      address: 'Upgrade server address',
      onlineSubmit: 'Upgrade now',
      offline: 'Offline upgrade',
      offlineDesc:
        'Please contact FireWire support to obtain the latest offline installation package, then upload the offline installation package for upgrade',
      select: 'Select offline installation package',
      offlineSubmit: 'Upload and upgrade',
      selectFile: 'Select file',
      upload: 'Upload to server',
      uploadInfo: 'Select only JAR files',
    },
    sysInfo: {
      vul_verifiy: 'Verification',
      infoTitle: 'Agent Settings',
      agentThreshold: 'Agent Threshold',
      vul:
        'The active verification function is used to verify whether the vulnerability of the tainted call chain is true and effective. During active verification, engine automatically identifies the location of attack parameters, constructs a payload, and then replays http / HTTPS traffic from within the agent for verification. This function is not necessary. Closing it will not change the vulnerability detection results. If it is not needed, it can be closed by itself.      ',
      open:
        'When the CPU utilization meets the threshold condition, the agent automatically stops.',
      close:
        'When the CPU utilization is lower than the threshold condition, the agent starts automatically.',
      cpu: 'Utilization      ',
      enter: 'Enter',
      on: 'ON',
      off: 'OFF',
    },
    projectManage: {
      deleteConfirm:
        'Are you sure you want to delete the selected application?',
      delete: 'Delete',
      cancel: 'Cancel',
      deleteSuccess: 'Delete Success',
      title: 'APPLICATIONS',
      name: 'Application',
      vul: 'Confirmed Vulnerabilities',
      agent: 'Live Agent',
      owner: 'User',
      time: 'Update Date',
      manage: 'Settings',
      add: 'New Application',
      searchName: 'Enter the application name in the search field',
    },
    projectEdit: {
      token: 'Access Token',
      tokenDesc:
        'Configure the access credentials of the current project for permission processing in the automatic scanning function',
      tokenPlaceholder: 'Place enter the access token',
      appAddress: 'Application Address',
      appAddressDesc:
        'Configure the external access address of the current project for automatic scanning',
      appAddressPlaceholder: 'Place enter the application address',
      on: 'ON',
      off: 'OFF',
      followAll: 'Follow',
      advanced: 'Advanced',
      save: 'Save',
      clear: 'Cancel',
      addScan: 'Add Custom Template',
      scanName: 'Template Name',
      fid: 'Severity',
      selectAll: 'Select All',
      back: 'Return',
      title: 'Settings',
      name: 'Application Name',
      namePlaceholder:
        'The application name must be less than 20 characters which included:Chinese characters, uppercase/lowercase letter, digit and symbol',
      mode: 'Scan Mode',
      mode1: 'Instrumentation Mode',
      mode2: 'Traffic mode',
      agent: 'Agent',
      agentPlaceholder: 'Please select Agent',
      scan: 'Custom Template',
      scanPlaceholder: 'Please select an custom template',
      scanAdd: 'New Rule Template',
      added: 'Added',
      submit: 'Save',
      version_name: 'Application Version',
      versionNamePlaceholder: 'Please enter the version number',
      description: 'Version Description',
      descriptionPlaceholder: 'Please enter a version description',
      agent_popover:
        'Bind the agent to the current project by selecting the agent; It is recommended to use the project.name parameter on the agent side to automatically bind the agent to the project',
      version_name_popover:
        'It is recommended to use the project.version parameter on the agent side to specify the project version',
      vul_verifiy: 'Verification',
    },
    apiList: {
      methodPlaceHolder: 'Method',
      searchPlaceHolder: 'Input api’s value, then enter for search',
      statusPlaceHolder: 'State',
      rate: 'covering-ratio',
      parameters: 'Parameters',
      view: 'View Request',
      send: 'Initiate Request',
      name: 'Name',
      type: 'Type',
      extra: 'Extra',
      response: 'Response',
      unlimited: 'Unlimited',
      covered: 'Covered',
      uncovered: 'Uncovered',
    },
    projectDetail: {
      beforeClose: 'Please save the version you are editing first',
      mode: 'Mode: ',
      latest_time: 'Created Time:',
      projectDesc: 'Overview',
      apiList: 'API Sitemap',
      projectVul: 'Vulnerabilities',
      projectComponent: 'Libraries',
      vulNum: 'Severity Distribution',
      trend: 'Risk Trend',
      type: 'Rule Distribution',
      owner: 'User: ',
      version: 'Version: ',
      add_version: 'Add Version',
      version_dialog: 'Version Settings',
      version_name: 'Version Name',
      description: 'Version Description',
      handle: 'Settings',
      current_version: 'Current Version',
      versionCurrent: 'Set as current',
      editVersion: 'Modify',
      enterVersion: 'OK',
      dialogEnterVersion: 'Closed',
      cancelVersion: 'Cancel',
      deleteVersion: 'Delete',
      hasEdit: 'Version is currently edited',
      hasSame: 'Version Name already exists',
      warning: 'Prompt',
      warningInfo:
        'This operation will permanently delete this version, do you want to continue?',
      setting: 'Settings',
      export: 'Reports',
      scaExport: 'Sca',
      recheck: 'Vulnerability Verification',
      search_version_name: 'Enter version name, e.g.,v1',
      search_description:
        'Enter version description, e.g.,the xth iteration of the xxx business',
      pieType: 'Type',
      exportSuccess: 'Export report successful',
      exportFail: 'Export report failed',
      exportType: 'Report Format',
      exportbtn: 'Export',
      exportHistory: 'History',
      reportTtype: 'Type',
      reportTtime: 'time',
      reportStatus: 'Status',
      done: 'Done',
      loading: 'Loading',
      rWarningInfo:
        'This operation will permanently delete this report, do you want to continue?',
    },
    userList: {
      keywordPlaceholder: 'Enter the keyword of username to search',
      addUser: 'Add User',
      editUser: 'User Information',
      userID: 'User ID',
      name: 'Username',
      namePlaceholder: 'Please enter the username',
      email: 'Email',
      emailPlaceholder: "Please enter the user's email address",
      role: 'Roles',
      department: 'Department',
      departmentPlaceholder: 'Please select the department to which you belong',
      phone: 'Contact Number',
      phonePlaceholder: 'Please enter the phone number',
      operate: 'Settings',
      password: 'Password',
      passwordPlaceholder: 'Please enter your password',
      rePass: 'Confirm Password',
      rePassPlaceholder: 'Please re-enter the password',
      submit: 'Save',
      cancel: 'Cancel',
      isActive: 'Status',
      dateJoined: 'Created Time',
      lastLogin: 'Login time',
      reset: 'Reset password',
      admin: 'Super Admin',
      user: 'Ordinary User',
      needPWD: 'Please enter the password',
      rePWD: 'Please enter the password again',
      diffPWD: 'Password does Not match',
      on: 'Enable',
      off: 'Disable',
      notLogin: 'Not logged in',
      deleteConfirm:
        'This operation will delete the user. Do you want to continue?',
      deleteConfirmPop: 'Prompt',
      resetConfirm:
        "User's password will reset immediately, are you sure you want to continue?",
      resetConfirmPop: 'Prompt',
      edit: 'Modify',
      del: 'Delete',
      talent: 'Talent',
    },
    talent: {
      delete: {
        confirm:
          'This operation will permanently delete the tenant. Do you want to continue?',
        cancelBtn: 'Cancel',
        confirmBtn: 'Confirm',
      },
      title: {
        add: 'Add Tenant',
        modify: 'Modify tenant information',
        placeholder:
          'Enter the tenant name to search, e.g.,FireWire White Hat Community',
      },
      table: {
        name: 'Tenant',
        enable: 'Status',
        create: 'Created time',
        update: 'Updated time',
        modifyBy: 'User',
        operate: 'Settings',
        open: 'Settings',
        off: 'Disable',
        on: 'Enable',
        user: 'Ordinary User',
        superAdmin: 'Super Admin',
      },
      add: {
        email: 'Email',
        emailPlaceholder:
          'Please enter a business email address. Note: Must use business email address',
        enable: 'Status',
        enablePlaceholder: 'Enable/Disable tenant',
        placeholder:
          'Please enter the tenant name. Note: the tenant name cannot be repeated',
        submit: 'Confirm',
        cancel: 'Cancel',
        on: 'Enable',
        off: 'Disable',
      },
    },
    about: {
      nowVersion: 'Current Version',
      newVersion: 'New Version',
      already: 'Already',
      update: 'Update',
      checking: 'Checking',
      help: 'Help',
      issue: 'Issue',
      detail: 'Detail',
      version: 'Version',
      copy: 'Copy',
      close: 'Close',
    },
  },
}
