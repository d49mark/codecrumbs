import { useState } from 'react';
import { LightboxSnapshot } from './types';
import { useArtifacts } from './hooks';
import {
  FloatingCrumbsCanvas,
  Header,
  Sidebar,
  Footer,
  ArtifactList,
  LightboxModal,
  AddCrumbModal,
} from './components';

export default function App() {
  const {
    selectedCategory,
    setSelectedCategory,
    activeYear,
    setActiveYear,
    expandedIds,
    toggleCard,
    searchQuery,
    setSearchQuery,
    filteredArtifacts,
    scrollToYear,
    getYearCount,
    addArtifact,
  } = useArtifacts();

  const [lightboxSnap, setLightboxSnap] = useState<LightboxSnapshot | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#F8FAFC] font-sans selection:bg-[#818CF8]/30 selection:text-white relative overflow-x-hidden">
      {/* Background ambient light orbs */}
      <div
        className="fixed top-[-180px] left-[20%] w-[520px] h-[520px] bg-[#6366F1]/10 rounded-full blur-[140px] pointer-events-none z-0"
        aria-hidden="true"
      />
      <div
        className="fixed bottom-[-200px] right-[10%] w-[460px] h-[460px] bg-[#F59E0B]/5 rounded-full blur-[130px] pointer-events-none z-0"
        aria-hidden="true"
      />

      <FloatingCrumbsCanvas />

      <Header
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <Sidebar
            activeYear={activeYear}
            onSelectYear={scrollToYear}
            getYearCount={getYearCount}
            onOpenAddModal={() => setShowAddModal(true)}
          />

          <section className="md:col-span-9 lg:col-span-10">
            <ArtifactList
              artifacts={filteredArtifacts}
              expandedIds={expandedIds}
              onToggleCard={toggleCard}
              onSnapshotClick={setLightboxSnap}
              onYearHover={setActiveYear}
            />
          </section>
        </div>
      </main>

      <Footer />

      <LightboxModal
        snapshot={lightboxSnap}
        onClose={() => setLightboxSnap(null)}
      />

      <AddCrumbModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAdd={addArtifact}
      />
    </div>
  );
}

