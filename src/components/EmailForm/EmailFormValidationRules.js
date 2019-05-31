export default function validate (values) {
  let errors = {}
  if (!values.email) {
    errors.email = 'Email address is required'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid'
  }
  if (!values.name) {
    errors.name = 'Name must be 4 or more characters'
  } else if (values.name.length < 4) {
    errors.name = 'Name must be 4 or more characters'
  }
  return errors
};
