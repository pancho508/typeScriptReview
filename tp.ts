//0. va ser un arreglo de nums o arr's nested
type arrMultiDimensional = Array<number | arrMultiDimensional>

// arrPlano 1d, depth los pases que te vas echar.
export function unflatten(arrPlano: number[], depth: number): arrMultiDimensional {

  function echaleUnPase(arr: arrMultiDimensional, dire: 1 | -1): arrMultiDimensional {
    // ->, <-, ->, <-, ... direcion 
    if (dire === 1) {
      console.log('pa el right ->')
      const result: arrMultiDimensional = []
      let i = 0

      while (i < arr.length) {
        const current = arr[i]

        if (Array.isArray(current)) {
          console.log('pancho, si estas adentro del un sub arr tienes que hacer un pase recursivo')
          const subArr = echaleUnPase(current, 1)
          result.push(subArr)
          i++
        } else {
          console.log('bro, el is num =>', current)
          const disponibles = arr.length - i
          const x = current
          const restan = x % disponibles

          if (restan < 3) {
            console.log('restan < 3 EMPUJA =>', x)
            result.push(x)
            i++
          } 
          else {
            console.log('restan >= 3 CORTA NUEVO ARR=>')
            const subArray = arr.slice(i, i + restan)
            result.push(subArray)
            i += restan
          }
        }
      }
      return result
    } 
    else {
      console.log('<- pa el left, reversa')

      const temp: arrMultiDimensional = []
      let i = arr.length - 1

      while (i >= 0) {
        const current = arr[i]

        //Lo mismo pero al revez xD
        if (Array.isArray(current)) {
          const subArr = echaleUnPase(current, -1)
          temp.push(subArr)
          i--
        } 
        else {
          const disponibles = i + 1
          const x = current
          const restan = x % disponibles

          if (restan < 3) {
            temp.push(x)
            i--
          } else {
            const startIndex = i - restan + 1
            const subArray = arr.slice(startIndex, i + 1)
            temp.push(subArray)

            i -= restan
          }
        }
      }
      console.log('temp=>', temp)
      return temp.reverse()
    }
  }

  let result: arrMultiDimensional = arrPlano
  let dire: 1 | -1 = 1 // 1: right, -1: left

  // Echar pases pa cubrir todas las dimensiones
  for (let dig = 0; dig < depth; dig++) {
    result = echaleUnPase(result, dire)
    dire = (dire === 1 ? -1 : 1)
  }

  return result
}
