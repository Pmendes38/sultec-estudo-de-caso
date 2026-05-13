'use client'

export function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: '80px' }}
    >
      {/* Fix 2: Background visível sem opacity */}
      <img
        src="https://images.unsplash.com/photo-1486718448742-165732cd63d5?w=1500&q=80"
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Fix 2: Overlay com gradiente, sem sufocar a imagem */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(0,0,0,0.80), rgba(0,0,0,0.60), rgba(0,0,0,0.30))',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '96px 24px',
        width: '100%',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

          {/* Fix 3: Título em caixa alta, dois elementos separados */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            margin: 0,
          }}>
            Tecnologia, Estrutura e
          </h1>

          <h2 style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            color: '#FF6A00',
            margin: 0,
          }}>
            Excelência Operacional.
          </h2>

          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '1.125rem',
            maxWidth: '600px',
            margin: '8px 0 0',
          }}>
            Soluções inovadoras que transformam sua estrutura em resultados
          </p>

          {/* Fix 4: Botões com tamanho e estilo corretos */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '16px' }}>
            <button style={{
              backgroundColor: '#FF6A00',
              color: '#FFFFFF',
              padding: '14px 28px',
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}>
              Falar com especialista →
            </button>

            <button style={{
              backgroundColor: 'transparent',
              color: '#FFFFFF',
              padding: '14px 28px',
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '4px',
              border: '1px solid rgba(255,255,255,0.4)',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}>
              Ver soluções →
            </button>
          </div>

          {/* Fix 5: Stats como barra horizontal, não cards */}
          <div style={{
            display: 'flex',
            alignItems: 'stretch',
            marginTop: '64px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '32px',
          }}>
            {[
              { value: '+12', label: 'ANOS DE MERCADO', icon: '🛡️' },
              { value: '+350', label: 'PROJETOS', icon: '📋' },
              { value: 'NACIONAL', label: 'ATENDIMENTO', icon: '📍' },
              { value: 'ESPECIALIZADA', label: 'EQUIPE', icon: '👥' },
            ].map((stat, index) => (
              <div key={index} style={{
                flex: 1,
                paddingLeft: index === 0 ? 0 : '32px',
                paddingRight: '32px',
                borderRight: index < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
              }}>
                <span style={{ fontSize: '1.5rem' }}>{stat.icon}</span>
                <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.1rem', margin: 0 }}>
                  {stat.value}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', margin: 0 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
