# Part 7E: three ORIGINAL pieces, written note by note here (no AI model, no existing melody).
import mido
MAJ=[0,2,4,5,7,9,11]
def sc(tonic,d):  # scale index -> midi (d may be negative or > 6)
  o,i=divmod(d,7);return tonic+12*o+MAJ[i]
ROM={'I':0,'ii':1,'iii':2,'IV':3,'V':4,'vi':5}
def triad(tonic,r):d=ROM[r];return [sc(tonic,d),sc(tonic,d+2),sc(tonic,d+4)]
def build(name,bpm,beats,tonic,chords,melody,parts,tpb=480):
  mf=mido.MidiFile(ticks_per_beat=tpb);ev=[]  # (tick,ch,type,note,vel)
  def note(ch,t,dur,n,v):ev.append((int(t*tpb),ch,'on',n,v));ev.append((int((t+dur)*tpb)-1,ch,'off',n,0))
  # melody (channel 0)
  t=0
  for b,bar in enumerate(melody):
    bt=0
    for d,l in bar:
      if d!='r':
        v=parts['mel'][2] if len(parts['mel'])>2 else 52
        v=v+(4 if bt==0 else 0)
        note(0,t+bt,l*0.95,sc(tonic+12,d),v)
      bt+=l
    assert abs(bt-beats)<1e-6,(name,b,bt)
    t+=beats
  # accompaniment (channel 1, 2)
  for b,r in enumerate(chords):
    t0=b*beats;tr=triad(tonic,r);root=tr[0]-12 if tr[0]-12>=50 else tr[0]
    parts['acc'][3](note,1,t0,beats,tr,root)
    if 'pad' in parts:parts['pad'][3](note,2,t0,beats,tr,root)
  total=len(chords)*beats
  tr=mido.MidiTrack();mf.tracks.append(tr)
  tr.append(mido.MetaMessage('set_tempo',tempo=mido.bpm2tempo(bpm),time=0))
  tr.append(mido.MetaMessage('time_signature',numerator=beats,denominator=4,time=0))
  for ch,(k,p) in enumerate(parts.items()):
    tr.append(mido.Message('program_change',channel=ch,program=p[0],time=0))
    tr.append(mido.Message('control_change',channel=ch,control=7,value=p[1],time=0))
    tr.append(mido.Message('control_change',channel=ch,control=91,value=50,time=0))  # gentle reverb
  ev.sort(key=lambda e:(e[0],e[2]=='on'));last=0
  for tk,ch,ty,n,v in ev:
    tr.append(mido.Message('note_on' if ty=='on' else 'note_off',channel=ch,note=n,velocity=v,time=tk-last));last=tk
  tail=int(2*bpm/60*tpb)  # 2 s of tail after the loop point
  tr.append(mido.MetaMessage('end_of_track',time=total*tpb-last+tail))
  mf.save(f'/workspace/b29/out/{name}.mid');return total*60/bpm
# --- accompaniment patterns (soft) ---
def arp_nylon(note,ch,t0,beats,tr,root):
  pat=[root,tr[1],tr[2],tr[0]+12,tr[1]+12,tr[2],tr[1],tr[0]+12]
  for i,n in enumerate(pat):note(ch,t0+i*0.5,0.9,n,40 if i==0 else 33)
def uke(note,ch,t0,beats,tr,root):
  note(ch,t0,0.9,root,38)
  up=[x if x>=60 else x+12 for x in tr]
  for k in (1,2,3):
    for j,n in enumerate(sorted(up)):note(ch,t0+k+0.02*j,0.35,n,30 if k!=2 else 27)
  for j,n in enumerate(sorted(up)):note(ch,t0+2.5+0.02*j,0.3,n,24)
def pad(note,ch,t0,beats,tr,root):
  for n in tr:note(ch,t0,beats-0.05,n,30)
def mbox(note,ch,t0,beats,tr,root):
  for k,n in ((1,tr[1]+12),(2,tr[2]+12)):note(ch,t0+k,0.8,n,26)
# --- 1. hill: walking home, F major, 84 bpm, 4/4, 16 bars ---
F=53+12  # F4
hill_ch=['I','vi','IV','V','I','iii','IV','V','vi','IV','I','V','IV','I','ii','V']
hill_mel=[[(2,1.5),(1,.5),(0,1),(4,1)],[(5,2),(4,1),(2,1)],[(3,1.5),(4,.5),(5,1),(3,1)],[(1,3),('r',1)],
 [(4,1),(5,.5),(4,.5),(2,1),(0,1)],[(2,2),(4,1),(6,1)],[(5,1.5),(3,.5),(3,1),(1,1)],[(4,2),(1,1),(-1,1)],
 [(0,1),(2,1),(5,1),(4,.5),(2,.5)],[(3,2),(5,2)],[(7,1.5),(6,.5),(4,1),(2,1)],[(4,3),('r',1)],
 [(5,1),(3,1),(5,1),(7,1)],[(6,1.5),(4,.5),(2,2)],[(3,1),(1,1),(3,1),(4,1)],[(1,2),(-1,1),(1,1)]]
L1=build('hill',84,4,F,hill_ch,hill_mel,{'mel':(9,80,50),'acc':(24,100,0,arp_nylon)})
# --- 2. decorate: playful, G major, 92 bpm, 4/4, 16 bars ---
G=55  # G3 -> melody one octave up from tonic+12
dec_ch=['I','IV','I','V','I','IV','ii','V','IV','V','iii','vi','ii','V','I','V']
dec_mel=[[(4,.5),(6,.5),(7,1),(6,.5),(4,.5),(7,1)],[(10,.5),(9,.5),(7,1),(5,.5),(7,.5),(10,1)],[(9,1),(7,.5),(4,.5),(7,1),('r',1)],[(8,.5),(6,.5),(4,1),(6,.5),(8,.5),(11,1)],
 [(9,.5),(11,.5),(9,1),(7,.5),(4,.5),(2,1)],[(3,1),(5,.5),(7,.5),(10,1),(9,1)],[(8,1.5),(7,.5),(5,1),(3,1)],[(4,1),(6,1),(8,1),('r',1)],
 [(10,.5),(10,.5),(9,.5),(7,.5),(5,1),(7,1)],[(8,.5),(8,.5),(6,.5),(4,.5),(6,1),(8,1)],[(9,1),(6,1),(4,1),(6,1)],[(7,1.5),(5,.5),(2,2)],
 [(3,.5),(5,.5),(8,1),(7,.5),(5,.5),(3,1)],[(4,.5),(6,.5),(8,1),(11,1),('r',1)],[(9,1),(7,.5),(9,.5),(11,1),(7,1)],[(6,1),(4,1),(8,1.5),(6,.5)]]
L2=build('decorate',92,4,G,dec_ch,dec_mel,{'mel':(12,90,54),'acc':(25,85,0,uke)})
# --- 3. evening: lullaby, D major, 66 bpm, 3/4, 12 bars ---
D=62  # D4
eve_ch=['I','IV','I','V','vi','IV','I','V','IV','I','ii','V']
eve_mel=[[(2,2),(1,1)],[(3,1),(5,1),(3,1)],[(2,2),(0,1)],[(1,3)],[(5,1.5),(4,.5),(2,1)],[(3,2),(5,1)],[(4,1),(2,1),(0,1)],[(1,2),(-1,1)],
 [(5,1),(7,1),(5,1)],[(4,2),(2,1)],[(1,1),(3,1),(4,1)],[(1,3)]]
L3=build('evening',66,3,D,eve_ch,eve_mel,{'mel':(8,90,50),'acc':(10,70,0,mbox),'pad':(89,70,0,pad)})
print('loop lengths s',round(L1,3),round(L2,3),round(L3,3))
