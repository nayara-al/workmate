import Filter from '@/components/organism/Filter'
import SearchResults from '@/components/organism/SearchResults'
import React from 'react'

export default function SearchPage() {
  return (
    <div className="w-full min-h-[calc(100vh-4rem)] flex bg-gray-100">
        <Filter/>
        <SearchResults/>
    </div>
  )
}
