export const SvgFixer = () => {
  const baseUrl: string = window.location.origin || `${window.location.protocol}://${window.location.host}`
  const useList: any = document.querySelectorAll('use[*|href]')

  if (Object.keys(useList).length) {
    Object.keys(useList).map(id => {
      const use = useList[id]

      if (use.getAttribute('xlink:href').indexOf('#') === 0) {
        use.setAttribute('xlink:href', baseUrl + use.getAttribute('xlink:href'))
      }
    })
  }
}

export default SvgFixer
