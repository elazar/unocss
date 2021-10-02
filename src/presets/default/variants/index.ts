import { MiniwindVariant } from '../../../types'
import { variantBreakpoints } from './breakpoints'
import { variantChildren } from './children'
import { variantColorsClass } from './dark'
import { variantPseudoClasses, variantPseudoElements } from './pseudo'

export * from './breakpoints'
export * from './dark'
export * from './children'
export * from './pseudo'

export const variantImportant: MiniwindVariant = {
  match: input => input.startsWith('!') ? input.slice(1) : undefined,
  rewrite: (input) => {
    input.forEach((v) => {
      if (v[1])
        v[1] += ' !important'
    })
    return input
  },
}

export const variantNegative: MiniwindVariant = {
  match: input => input.startsWith('-') ? input.slice(1) : undefined,
  rewrite: (input) => {
    input.forEach((v) => {
      if (v[1]?.toString().match(/^\d/))
        v[1] = `-${v[1]}`
    })
    return input
  },
}

export const defaultVariants = [
  variantNegative,
  variantImportant,
  variantBreakpoints,
  variantChildren,
  ...variantColorsClass,
  ...variantPseudoClasses,
  ...variantPseudoElements,
]