import { ColorOption, ColorOptionProps } from './colorOptions'

export function BoxColorOption({ colorName }: ColorOptionProps) {
  return (
    <div className="">
      {}
      <ColorOption colorName={colorName} />
    </div>
  )
}
