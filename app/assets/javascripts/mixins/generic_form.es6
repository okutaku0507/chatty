var Mixins = Mixins || {}

;((namespace) => {
  namespace.GenericForm = {
    renderTextField: function(m, fieldName, labelText, options = {}) {
      let htmlClass, errors

      if (!this.agent.object) {
        this.agent.object = {};
        this.agent.errors = {};
      }

      if (m.fieldNamePrefix)
        errors = this.agent.errors[m.fieldNamePrefix + '/' + fieldName]
      else
        errors = this.agent.errors[fieldName]

      let hasErrors = errors && errors.length > 0

      m.class({ 'form-group': true })
      m.class({ 'has-error': hasErrors })
      m.div(options, m => {
        m.labelFor(fieldName, labelText).space()
        if (options.min) m.attr({ min: options.min })
        if (options.max) m.attr({ max: options.max })
        m.textField(fieldName, { type: options.type, class: 'form-control',
          placeholder: options.placeholder }).sp()

        if (hasErrors) {
          m.attr({ class: 'alert alert-danger', role: 'alert' })
          m.div(
            m => m.ul(
              m => errors.forEach(
                error => m.li(error)
              )
            )
          )
        }
      })
    },

    renderTextAreaField: function(m, fieldName, labelText, options = {}) {
      let htmlClass, errors

      if (m.fieldNamePrefix)
        errors = this.agent.errors[m.fieldNamePrefix + '/' + fieldName]
      else
        errors = this.agent.errors[fieldName]

      let hasErrors = errors && errors.length > 0

      m.class({ 'form-group': true })
      m.class({ 'has-error': hasErrors })
      m.div(options, m => {
        m.labelFor(fieldName, labelText).space()
        m.textareaField(fieldName, { type: options.type, class: 'form-control',
          rows: 10 }).sp()

        if (hasErrors) {
          m.attr({ class: 'alert alert-danger', role: 'alert' })
          m.div(
            m => m.ul(
              m => errors.forEach(
                error => m.li(error)
              )
            )
          )
        }
      })
    },

    renderSelect: function(m, fieldName, labelText, objects, options) {
      var htmlClass, choices;
      if (!this.agent.object) {
        this.agent.object = {};
        this.agent.errors = {};
      }
      if (!this.agent.object[fieldName]) this.agent.object[fieldName] = {};
      htmlClass = { 'form-group': true, 'has-error': this.agent.errors[fieldName] };
      options = options || {};
      options['class'] = 'form-control';
      options['name'] = fieldName;
      objects = objects || [];
      if (Array.isArray(objects[0])) {
        choices = objects;
      }
      else {
        choices = [];
        objects.forEach((o, index) => {
          choices.push([o, o]);
        })
      }
      m.div({ class: htmlClass }, m => {
        m.labelFor(fieldName, labelText).space();
        m.select(options, m => {
          if (options['include_blank']) m.option('');
          choices.forEach((c, index) => {
            m.option(c[0], { value: c[1] });
          })
        }).sp();
        if (this.agent.errors[fieldName]) {
          m.div(
            { class: 'alert alert-danger', role: 'alert' },
            m => m.ul(m => this.agent.errors[fieldName].forEach(error => m.li(error)))
          );
        }
      })
    },

    renderPasswordField: function(m, fieldName, labelText, options = {}) {
      options.type = 'password'
      this.renderTextField(m, fieldName, labelText, options)
    },

    renderEmailField: function(m, fieldName, labelText, options = {}) {
      options.type = 'email'
      this.renderTextField(m, fieldName, labelText, options)
    },

    renderHiddenField: function(m, fieldName, options = {}) {
      if (!this.agent.object) {
        this.agent.object = {};
        this.agent.errors = {};
      }
      m.hiddenField(fieldName, options)
    },

    cancel: function(pathName) {
      router.navigate(pathName)
      return false
    }
  }

  if (typeof module !== 'undefined') module.exports = namespace.GenericForm
})(Mixins)
