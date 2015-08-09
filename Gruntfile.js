module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);

    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ts: {
            build: {
                src: ["src/TypeFramework.ts"],
                out: "build/TypeFramework.js",
                options: {
                    target: 'es5',
                    module: 'commonjs',
                    sourceMap: false,
                    declaration: true,
                    removeComments: true,
                    htmlModuleTemplate: '<%= filename %>',
                    htmlVarTemplate: '<%= ext %>',
                    additionalFlags:'--experimentalDecorators --emitDecoratorMetadata'
                }
            },
            build_test: {
                src: ["test/integration/app.ts"],
                out: "test/integration/.build/app.js",
                options: {
                    target: 'es5',
                    module: 'commonjs',
                    sourceMap: false,
                    declaration: true,
                    removeComments: true,
                    htmlModuleTemplate: '<%= filename %>',
                    htmlVarTemplate: '<%= ext %>',
                    additionalFlags:'--experimentalDecorators --emitDecoratorMetadata'
                }
            }
        },
        file_append: {
            tf: {
                files: [{
                    input: 'build/TypeFramework.js',
                    append: "\nmodule.exports = TF;"

                }]
            },
            test: {
                files: [{
                    input: 'test/integration/.build/app.js',
                    prepend: "var TF = require('../../../build/TypeFramework.js');\n\n",
                    append: "\nmodule.exports = app;"

                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-file-append');
    grunt.loadNpmTasks("grunt-ts");

    grunt.registerTask('build_framework', ['ts:build', 'file_append:tf']);
    grunt.registerTask('build_test', ['ts:build_test', 'file_append:test']);

    grunt.registerTask('default', ['build_framework']);
    grunt.registerTask('test', ['build_framework', 'build_test']);
};
