module.exports = function (grunt) {
    'use strict';
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-cucumber');
    grunt.loadNpmTasks('grunt-jasmine');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-morph-pack');
    grunt.initConfig({
        pack: {
            morph: {
                dest: 'public',
                cwd: '.'
            }
        },
        babel: {
            dist: {
                files: [{
                        expand: true,
                        cwd: './src',
                        src: '**/*.js{,x}',
                        ext: '.js',
                        dest: './lib'
                    }]
            },
            options: { sourceMap: true }
        },
        sass: {
            dist: {
                expand: true,
                cwd: 'sass',
                src: [
                    '*.scss',
                    '!_*.scss'
                ],
                dest: './public',
                ext: '.css',
                options: { outputStyle: 'compressed' }
            }
        },
        jasmine: {
            unit: {
                spec_dir: './test/unit',
                helpers: ['../../node_modules/babel-register/lib/node.js']
            }
        },
        cucumberjs: {
            'multi-tier': {
                options: {
                    format: 'pretty',
                    steps: 'test/multi-tier',
                    support: 'node_modules/morph-test-helpers/lib/cucumber/support'
                },
                src: 'test/multi-tier'
            }
        },
        eslint: {
            target: [
                './src/**/*.js',
                './src/**/*.jsx'
            ]
        }
    });
    grunt.registerTask('build', [
        'babel',
        'sass',
        'pack'
    ]);
    grunt.registerTask('test', [
        'jasmine',
        'cucumberjs',
        'eslint'
    ]);
};