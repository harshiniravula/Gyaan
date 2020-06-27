export const EmailIdPattern = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
export function InputValidation(value) {
   if (!value) {
      return {
         hasError: true,
         errorMessage: 'input value is empty'
      }
   } else if (!value.match(EmailIdPattern)) {
      return {
         hasError: true,
         errorMessage: 'invalid input'
      }
   }
   return {
      hasError: false,
      errorMessage: ''
   }
}
/*{
  "npm-intellisense.importQuotes": "\"",
  "typescript.preferences.quoteStyle": "double",
  "javascript.preferences.quoteStyle": "double"
} */
