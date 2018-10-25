# Insomnia Base64 File Encoder

This is a plugin for [Insomnia](https://insomnia.rest/) that allows encoding
a file with base64.

## Instalation

Install the `insomnia-plugin-base64-file` plugin from Preferences > Plugins.

## Usage

Add the `JSON Web Token Creator` template tag wherever you see fit and fill the
necessary fields. Whichever you'll leve empty won't be present in the token.

The recommended way to set up is to create environment variables to (at least)
`iss`, `sub` and `secret`, and use those variables inside the
`JSON Web Token Creator`.
