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

      {/* Fix 2: Overlay com gradiente suave para visibilidade da imagem */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(0,0,0,0.70), rgba(0,0,0,0.50), rgba(0,0,0,0.20))',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '120px 40px',
        width: '100%',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

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
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '24px' }}>
            <button style={{
              backgroundColor: '#FF6A00',
              color: '#FFFFFF',
              padding: '16px 40px',
              fontSize: '1.125rem',
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
              padding: '16px 40px',
              fontSize: '1.125rem',
              fontWeight: 600,
              borderRadius: '4px',
              border: '1px solid rgba(255,255,255,0.5)',
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
            marginTop: '80px',
            borderTop: '1px solid rgba(255,255,255,0.2)',
            paddingTop: '48px',
          }}>
            {[
              { value: '+12', label: 'ANOS DE MERCADO', icon: '🛡️' },
              { value: '+350', label: 'PROJETOS', icon: '📋' },
              { value: 'NACIONAL', label: 'ATENDIMENTO', icon: '📍' },
              { value: 'ESPECIALIZADA', label: 'EQUIPE', icon: '👥' },
            ].map((stat, index) => (
              <div key={index} style={{
                flex: 1,
                paddingLeft: index === 0 ? 0 : '40px',
                paddingRight: '40px',
                borderRight: index < 3 ? '1px solid rgba(255,255,255,0.2)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}>
                <span style={{ fontSize: '2rem' }}>{stat.icon}</span>
                <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.3rem', margin: 0 }}>
                  {stat.value}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', margin: 0, fontWeight: 500 }}>
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
