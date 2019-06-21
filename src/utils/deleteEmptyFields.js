const deleteEmptyFields = (obj) => {
  for (const key in obj) {
    if (obj[key] === '') { delete obj[key] }
  }
}

export default deleteEmptyFields
