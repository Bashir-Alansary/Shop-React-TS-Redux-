import React from 'react'

export default function ProductMoreInfo({info}) {
  return (
    <div className='info for-table'>
      <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">style</th>
              <th scope="col">composition</th>
              <th scope="col">weight</th>
              <th scope="col">dimensions</th>
            </tr>
          </thead>
          <tbody>
          {
            info.map(item => {
              const {style, composition ,weight, dimensions} = item;
              return (
              <tr key={Math.random()}>
                <td className='style'>{style}</td>
                <td className='composition'>{composition}</td>
                <td className='weight'>{weight}</td>
                <td className='dimensions'>{dimensions}</td>
              </tr>
              )
            })
          }
          </tbody>
        </table>
    </div>
  )
}
