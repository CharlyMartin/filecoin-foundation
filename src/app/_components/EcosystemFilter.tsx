import { CMSFieldOption, CMSConfig } from '@/types/cmsConfig'

import { getCMSCollection, getCMSFieldOptions } from '@/utils/cmsConfigUtils'

import configJson from '@/data/cmsConfigSchema.json'
const config: CMSConfig = configJson as CMSConfig

type EcosystemFilterProps = {
  onCategoriesChange: (selectedCategories: string[]) => void
  onTagsChange: (selectedTags: string[]) => void
}

type OptionSelectProps = {
  label: string
  name: string
  options: CMSFieldOption[]
  onChange: (selectedValues: string[]) => void
}

function OptionSelect({
  label,
  name,
  options,
  onChange,
}: OptionSelectProps): JSX.Element {
  function handleSelectChange(
    event: React.ChangeEvent<HTMLSelectElement>,
  ): void {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value,
    )

    onChange(selectedOptions)
  }

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="block text-white">
        {label}
      </label>
      <select multiple name={name} id={name} onChange={handleSelectChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="py-1">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export function EcosystemFilter({
  onCategoriesChange,
  onTagsChange,
}: EcosystemFilterProps) {
  const collection = getCMSCollection(config.collections, 'ecosystem_projects')
  let categories
  let tags

  if (collection) {
    categories = getCMSFieldOptions(collection, 'category')
    tags = getCMSFieldOptions(collection, 'tags')
  }

  return (
    <div className="flex flex-col gap-2 text-brand-800">
      <OptionSelect
        label="Select Categories"
        name="categories"
        options={categories || []}
        onChange={(selectedCategories) =>
          onCategoriesChange(selectedCategories)
        }
      />
      <OptionSelect
        label="Select Tags"
        name="tags"
        options={tags || []}
        onChange={(selectedTags) => onTagsChange(selectedTags)}
      />
    </div>
  )
}
