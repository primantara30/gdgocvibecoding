import dynamic from 'next/dynamic';
import styles from './dashboard.module.css';

// Dynamically import the map to avoid SSR issues with Leaflet
const DynamicMap = dynamic(() => import('./components/Map'), {
  ssr: false,
  loading: () => <div style={{display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center'}}>Initializing Spatial Engine...</div>
});

export default function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      {/* Sidebar / Control Panel */}
      <aside className={styles.sidebar}>
        <div className={styles.header}>
          <h1 className={styles.title}>Geo-Social Intelligence</h1>
          <p className={styles.subtitle}>Sub-District Spatial Telemetry</p>
        </div>

        <div className={styles.metricsGrid}>
          <div className={styles.metricCard}>
            <div className={styles.metricValue}>1,204</div>
            <div className={styles.metricLabel}>Total Households</div>
          </div>
          <div className={styles.metricCard}>
            <div className={styles.metricValue}>342</div>
            <div className={styles.metricLabel}>High Priority</div>
          </div>
          <div className={styles.metricCard}>
            <div className={styles.metricValue}>85%</div>
            <div className={styles.metricLabel}>Aid Coverage</div>
          </div>
          <div className={styles.metricCard}>
            <div className={styles.metricValue}>24</div>
            <div className={styles.metricLabel}>Flagged Anomalies</div>
          </div>
        </div>

        <div className={styles.filtersSection}>
          <h2 className={styles.sectionTitle}>Spatial Filters</h2>
          {/* Placeholder for complex filters */}
          <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
            <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem'}}>
              <input type="checkbox" defaultChecked />
              Show Eligible Households
            </label>
            <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem'}}>
              <input type="checkbox" defaultChecked />
              Show 50m Geofence Radii
            </label>
            <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem'}}>
              <input type="checkbox" />
              Socioeconomic Heatmap
            </label>
          </div>
        </div>
        
        <div style={{marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--color-border)', fontSize: '0.75rem', color: 'var(--color-text-muted)'}}>
          System Status: Online | GPS Accuracy: ±3m
        </div>
      </aside>

      {/* Main Map View */}
      <main className={styles.mapContainer}>
        <DynamicMap />
      </main>
    </div>
  );
}
